// 引入path模块
var path = require('path')
const webpack = require('webpack')
// 增加对html的支持；
const htmlWebpackplugin = require('html-webpack-plugin')
//增加 vue-loader plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'
const config = {
    entry: path.join(__dirname, 'src/index.js'),  // 入口文件
     // 输出文件
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/')
    },  
    // 增加plugin（插件）的节点
    plugins: [
    // 直接使用htmlWebpackplugin，注意好NODE_ENV的判断的字符串写法
        new htmlWebpackplugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
    ],
    module: {
        rules: [
            // 处理vue文件
            {
                test: /\.vue$/,
                // 在之前我们使用的是use
                loader: 'vue-loader'
            },
            //  处理css文件
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader', ],
            },
            // 处理图片
            {
                test: /\.(png|jpeg|jpg|svg|gif|webp)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[hash:8]-[name].[ext]'
                    }
                }]
            },
            // 增加styl的支持
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]// end modules
    }

 }
console.info(isDev)
// 根据环境来判断是否添加webpack-dev-server配置
if (isDev) {
    // 配置ES6语法转换
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 3000,
        host: '0.0.0.0',
        // 配置将错误信息展示在页面中
        overlay: {
            errors: true
        },
        open: true,
        // 热更新
        hot: true
    }
    // 添加插件
    config.plugins.push(
        // 不刷新更新
      new webpack.HotModuleReplacementPlugin(),
      // 过滤信息
      new webpack.NoEmitOnErrorsPlugin()
    )
}
console.log(config)
 // 在最后返回config参数
 module.exports = config