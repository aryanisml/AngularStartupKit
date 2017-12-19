
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');

module.exports = 
{

    entry: 
    {
        'app': './src/main.ts',
        'dom': './src/dom.ts'
    },

    resolve: 
    {
        extensions: ['.ts', '.js']
    },

    output: 
    { 
        path: helpers.root('dist'),
        publicPath: '/', 
        filename: '[name].js', 
        chunkFilename: '[id].chunk.js'
    },

    module: 
    {
        rules: 
        [
            {
                test: /\.ts$/,
                loaders: 
                [
                    {
                        loader: 'awesome-typescript-loader',
                        options: 
                        {
                            configFileName: helpers.root('src', 'tsconfig.json')
                        }
                    }
                ]
            }, 
        
            {
                test: /\.html$/,
                loader: 'html-loader'
            }, 
            
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap'})
            },
            
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: 
    [
        new webpack
            .optimize
            .CommonsChunkPlugin(
                {
                    name: ['app']
                }
            ),
            
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        
        new ExtractTextPlugin('[name].css')
    ],
    
    devtool: 'cheap-module-eval-source-map', 
    
    devServer: 
    { 
        inline: true,
        port: 80,
        historyApiFallback: true, 
        stats: 'minimal'
    }
};
