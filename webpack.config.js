/**
 * Created by yangbingxun on 2016/11/18.
 */


var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry:[
        'webpack/hot/dev-server',
        './app/main.js',
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
        // new ExtractTextPlugin('./style/[name].css')
    ]
};


//
//
// var webpack = require('webpack');
//
// // 辅助函数
// var utils = require('./utils');
// var fullPath  = utils.fullPath;
// var pickFiles = utils.pickFiles;
//
// // 项目根路径
// var ROOT_PATH = fullPath('');
// // 项目源码路径
// var SRC_PATH = ROOT_PATH + '/app';
// // 产出路径
// var DIST_PATH = ROOT_PATH + '/assets';
//
// // node_modules
// var NODE_MODULES_PATH =  ROOT_PATH + '/node_modules';
//
//
// // conf
// // import api from 'conf/api';
// // var alias = pickFiles({
// //     id: /(conf\/[^\/]+).js$/,
// //     pattern: SRC_PATH + '/conf/*.js'
// // });
//
// // components
// // import Alert from 'components/alert';
// var alias = Object.assign({}, pickFiles({
//     id: /(components\/[^\/]+)/,
//     pattern: SRC_PATH + '/components/*'
// }));
//
// // reducers
// // import reducers from 'reducers/index';
// alias = Object.assign(alias, pickFiles({
//     id: /(reducers\/[^\/]+).js/,
//     pattern: SRC_PATH + '/reducers/*'
// }));
//
// // actions
// // import actions from 'actions/index';
// alias = Object.assign(alias, pickFiles({
//     id: /(actions\/[^\/]+).js/,
//     pattern: SRC_PATH + '/actions/*'
// }));
//
// alias = Object.assign(alias, {
//     'react-router': NODE_MODULES_PATH + '/react-router/lib/index.js',
//     'react-redux': NODE_MODULES_PATH + '/react-redux/lib/index.js',
//     'redux': NODE_MODULES_PATH + '/redux/lib/index.js',
//     // 'redux-thunk': NODE_MODULES_PATH + '/redux-thunk/lib/index.js'
// });
//
//
// var config = {
//     context: SRC_PATH,
//     entry: {
//         app: [SRC_PATH + '/main.js'],
//         lib: [
//             'react', 'react-dom', 'react-router',
//             'redux', 'react-redux'
//         ],
//     },
//     output: {
//         path: DIST_PATH,
//         // chunkhash 不能与 --hot 同时使用
//         // see https://github.com/webpack/webpack-dev-server/issues/377
//         // filename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js',
//         // chunkFilename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js'
//     },
//     module: {
//         loaders:[
//             {
//                 test: /\.css$/,
//                 loader: 'style-loader!css-loader'
//             },
//             {
//                 test: /\.(png|jpg)$/,
//                 loader: 'url-loader?limit=8192'
//             },
//             {
//                 test:/\.js|jsx$/,
//                 exclude:/node_modules/,
//                 loader:'babel-loader',
//                 query: {
//                     presets: ['react', 'es2015']
//                 }
//             }
//         ]
//     },
//     resolve: {
//         root: SRC_PATH,
//         alias: alias
//     },
//     devServer: {
//         inline: true,
//         port: 8081
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development')
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             names: ['lib', 'manifest']
//         }),
//     ]
// };
//
// module.exports=config;