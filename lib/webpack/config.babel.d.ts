export declare const PATH_DIST: string;
export declare const PATH_REACT_PLAYER: string;
export declare const PATH_STANDALONE: string;
export declare const plugins: any[];
declare const _default: {
    mode: string;
    devtool: string;
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
    plugins: any[];
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
