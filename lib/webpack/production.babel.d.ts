declare const _default: {
    mode: string;
    devtool: string;
    plugins: any[];
    optimization: {
        minimize: boolean;
        minimizer: any[];
    };
    entry: string;
    resolve: {
        alias: {
            assets: string;
            'react-dom': string;
        };
    };
    module: {
        rules: ({
            test: RegExp;
            loader: string;
            include: string;
            query: {
                presets: (string | {
                    modules: boolean;
                })[][];
            };
            use?: undefined;
        } | {
            test: RegExp;
            use: any[];
            include: string;
            loader?: undefined;
            query?: undefined;
        } | {
            test: RegExp;
            loader: string;
            include: string;
            query?: undefined;
            use?: undefined;
        })[];
    };
    output: {
        path: string;
        filename: string;
        publicPath: string;
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
