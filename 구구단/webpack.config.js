const path = require("path");
const webpack = require("webpack");

module.exports = {
    name: "gugudan-setting",
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve:{
        extensions: ['.jsx','.js'],
    },

    entry:{
        app: ['./client'],
    },
    module: {
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets:[
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 chrome versions'], //browserslist '1> !% in KR'
                        },
                        debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: [],
            },
        }],
    },
    plugins: [
        // 
        new webpack.LoaderOptionsPlugin({debug: true}),

        // 실무코드 10개 정도 존재할 가능성 높음
        // 플러그인들 제거하면서 알아보기
    ],
    output:{
        filename : 'app.js',
        path: path.join(__dirname, 'dist'), //실제 경로 C:\users ~
    },
};