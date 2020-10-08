const webpack = require('webpack');

module.exports = {
    css: { extract: false },
    filenameHashing: false,
    devServer: {
        proxy: 'http://localhost'
    },
    productionSourceMap: process.env.NODE_ENV !== 'production',
    configureWebpack: {
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ],
        devtool: 'source-map',
        output: {
            filename: 'my-web-component.js',
            chunkFilename: 'my-web-component.js'
        }
    },
    chainWebpack:
        config => {
            config.optimization.delete('splitChunks');
            process.env.NODE_ENV === 'production' &&  config.plugins.delete('copy');
        }
};
