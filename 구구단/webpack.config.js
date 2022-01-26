const path = require("path");

module.exports = {
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
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets:['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },
    output:{
        path: path.join(__dirname, 'dist'), //실제 경로 C:\users ~
        filename : 'app.js'
    },
}