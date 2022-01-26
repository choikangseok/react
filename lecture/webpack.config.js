const path = require('path');
// 노드에서 path 경로 쉽게 조작하는 것
//외우자

module.exports = {
    name: "wordrelay-setting",
    mode: 'development', //실서비스 :production
    devtool: 'eval',
    // 엔트리 확장자 입력 안해도 됨.!
    resolve:{
        extensions: ['.js', '.jsx']
    },

    entry: {
        // app: ['./client.jsx','./WordRelay,jsx'], 이미 다른데서 부르고 있어서 wordRelay 안씀
        // app: ['./client.jsx'],
        app: ['./client'],
    }, // 입력

    module : {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],

    },

    output: {
        path: path.join(__dirname, 'dist'), //실제 경로 C:\users ~
        filename : 'app.js'
    }, //출력
};