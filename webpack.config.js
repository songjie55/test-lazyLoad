const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin')


const webpackConfig = {
    cache: true,
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/main.ts')
    },
    output: {
        filename: 'js/[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    module: {
        noParse: /^(vue|vue-router|vuex-router-sync)$/,
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: ['\\.vue$']
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    devtool: 'eval-cheap-source-map',
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'template'),
                to: path.resolve(__dirname, 'dist'),
                filter: async (resourcePath) => {
                    if (resourcePath.indexOf('index.html') > -1) {
                        return false
                    }
                    return true
                }
            }]
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'template/index.html'),
            title: 'test',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.json', '.vue', '.css', '.less', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        fallback: {
            path: require.resolve('path-browserify')// 填补webpack移除的node polyfill坑
        }
    },
    devServer: {
        port: 3006,
        hot: true,
        open: true,
        compress: true,
        client: {
            logging: 'none'
        }
    }
}

module.exports = webpackConfig
