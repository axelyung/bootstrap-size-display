const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = {
    module: {
        rules:
            [{
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', { targets: { browsers: '> 1%' }, modules: false }],
                        ],
                    },
                },
            }],
    },
    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, 'dist')),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
        }),
    ],
};

module.exports = [{
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'bootstrap-size-display',
        libraryTarget: 'umd',
    },
    ...common,
}, {
    target: 'web',
    entry: {
        bsd: './src/web.js',
        'bsd.min': './src/web.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'bsd',
        libraryTarget: 'var',
    },
    devtool: 'source-map',
    ...common,
}];
