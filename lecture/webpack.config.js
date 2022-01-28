const path = require('path');
// process.env.NODE_ENV = 'production'; //배포 모드
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


// 노드에서 path 경로 쉽게 조작하는 것
//외우자

module.exports = {
    name: "numberBaseball",
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
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                    'react-hot-loader/babel'
                ],
            },
        }],
    },
    plugins: [
        //빌드할 때 마다 실행된다.
        new RefreshWebpackPlugin()

        // 실무코드 10개 정도 존재할 가능성 높음
        // 플러그인들 제거하면서 알아보기
    ],

    output: {
        path: path.join(__dirname, 'dist'), //실제 경로 C:\users ~
        filename : 'app.js',
        publicPath: '/dist', //가상의 경로 노드를 아는 사람은 쉬움.. express.static과 비슷함
    }, //출력
    devServer: {
        devMiddleware : { publicPath : '/dist'},
        static: { directory : path.resolve(__dirname)},
        hot : true
        // 소스코드의 변경점을 확일할 수 있음
    },
};