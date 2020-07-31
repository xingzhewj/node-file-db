module.exports = {
    mode: 'development',
    target: 'node',
    entry: __dirname + '/lib/control.ts',
    devtool: "inline-source-map",
    output: {
        libraryTarget: 'umd',
        filename: 'index.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};