const webpack = require('webpack');

module.exports = {
    css: { extract: false },
    filenameHashing: false,
    devServer: {
        proxy: 'http://localhost'
    },
    productionSourceMap: process.env.NODE_ENV !== 'production',
    // transpileDependencies: [ 'vue-material' ],
    configureWebpack: {
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ],
        devtool: 'source-map',
        output: {
            filename: 'connect-plus-patient-infojs',
            chunkFilename: 'connect-plus-patient-info.js'
        }
    },
    chainWebpack:
        config => {
            config.optimization.delete('splitChunks');
            process.env.NODE_ENV === 'production' &&  config.plugins.delete('copy');
        }
};
