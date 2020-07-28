module.exports = {
    mode: 'production',
    target: 'node',
    entry: __dirname + '/lib/control.ts',
    output: {
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