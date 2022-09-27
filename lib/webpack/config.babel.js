"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugins = exports.PATH_STANDALONE = exports.PATH_REACT_PLAYER = exports.PATH_DIST = void 0;
var path_1 = require("path");
var webpack_1 = __importDefault(require("webpack"));
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var PORT = 3000;
var PRODUCTION = process.env.NODE_ENV === 'production';
// const LOCAL_IDENT_NAME = PRODUCTION ? '[hash:base64:5]' : '[name]__[local]__[hash:base64:5]'
var PUBLIC_PATH = PRODUCTION ? '' : "http://localhost:".concat(PORT, "/");
var STYLE_LOADER = PRODUCTION ? mini_css_extract_plugin_1.default.loader : 'style-loader';
var PATH_ROOT = (0, path_1.join)(__dirname, '..');
var PATH_SRC = (0, path_1.join)(PATH_ROOT, 'src');
var PATH_DEMO = (0, path_1.join)(PATH_ROOT, 'demo');
var PATH_NODE_MODULES = (0, path_1.join)(PATH_ROOT, 'node_modules');
var PATH_ASSETS = (0, path_1.join)(PATH_ROOT, 'assets');
var PATH_INDEX = (0, path_1.join)(PATH_SRC, 'demo', 'index.html');
exports.PATH_DIST = (0, path_1.join)(PATH_ROOT, 'dist');
exports.PATH_REACT_PLAYER = (0, path_1.join)(PATH_SRC, 'index.js');
exports.PATH_STANDALONE = (0, path_1.join)(PATH_SRC, 'standalone.js');
exports.plugins = [
    new html_webpack_plugin_1.default({
        template: PATH_INDEX,
        minify: {
            collapseWhitespace: true,
            quoteCharacter: '\''
        }
    })
];
exports.default = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: (0, path_1.join)(PATH_SRC, 'demo', 'index'),
    resolve: {
        alias: {
            assets: PATH_ASSETS,
            'react-dom': '@hot-loader/react-dom'
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: PATH_SRC,
                query: {
                    presets: [['@babel/preset-env', { modules: false }]]
                }
            }, {
                test: /\.css$/,
                use: [
                    STYLE_LOADER,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                            // modules: {
                            //   localIdentName: LOCAL_IDENT_NAME
                            // }
                        }
                    },
                    'postcss-loader'
                ],
                include: PATH_SRC
            }, {
                test: /\.css$/,
                use: [
                    STYLE_LOADER,
                    'css-loader?sourceMap'
                ],
                include: PATH_NODE_MODULES
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=assets/[hash].[ext]',
                include: PATH_ASSETS
            }]
    },
    output: {
        path: PATH_DEMO,
        filename: 'app.js',
        publicPath: PUBLIC_PATH
    },
    plugins: __spreadArray(__spreadArray([], exports.plugins, true), [
        new webpack_1.default.HotModuleReplacementPlugin(),
        new webpack_1.default.NoEmitOnErrorsPlugin()
    ], false),
    devServer: {
        port: PORT,
        publicPath: PUBLIC_PATH,
        hot: true,
        overlay: true,
        historyApiFallback: true,
        stats: 'minimal'
    },
    performance: {
        hints: false
    }
};
