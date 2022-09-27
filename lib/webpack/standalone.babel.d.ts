declare const _default: {
    entry: string;
    output: {
        path: string;
        filename: string;
        library: string;
        libraryExport: string;
    };
    module: {
        rules: {
            test: RegExp;
            loader: string;
        }[];
    };
    plugins: any[];
    mode: string;
    devtool: string;
    optimization: {
        minimize: boolean;
        minimizer: any[];
    };
    resolve: {
        alias: {
            assets: string;
            'react-dom': string;
        };
    };
    devServer: {
        port: number;
        publicPath: string;
        hot: boolean;
        overlay: boolean;
        historyApiFallback: boolean;
        stats: string;
    };
    performance: {
        hints: boolean;
    };
};
export default _default;
