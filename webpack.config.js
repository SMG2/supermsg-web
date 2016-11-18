/**
 * Created by yangbingxun on 2016/11/18.
 */


var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry:[
        'webpack/hot/dev-server',
        './app/main.js'
    ],
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 8081
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test:/\.js|jsx$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('./style/[name].css')
    ]
};
