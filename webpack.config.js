var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var jQuery = require("jquery");

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: [path.resolve(ROOT_PATH, 'app/main')],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
            ,
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/template/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};

if(TARGET === 'build') {
    module.exports = merge(common, {
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel',
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

if(TARGET === 'dev') {
    module.exports = merge(common, {
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel', 'flowcheck'],
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        }
    });
}