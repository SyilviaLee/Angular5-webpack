/**
 * Created by sylvia on 2018/1/17.
 */
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const helper = require('./helper');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(commonConfig,{
    output: {
        filename: '[name].js',
        path: helper.root('dist'),
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ],
    devServer: {
        //contentBase: './dist',
        hot: true
    }
})