"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_1 = require("webpack");
var config_babel_1 = require("./config.babel");
var production_babel_1 = __importDefault(require("./production.babel"));
exports.default = __assign(__assign({}, production_babel_1.default), { entry: config_babel_1.PATH_REACT_PLAYER, output: {
        path: config_babel_1.PATH_DIST,
        filename: '../src/demo/CustomSlider',
        library: 'truong-slider',
        libraryExport: 'default'
    }, externals: {
        react: 'React'
    }, module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }, plugins: [
        new webpack_1.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ] });
