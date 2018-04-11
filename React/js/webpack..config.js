//mkdir react-test
//cd react-test
//npm init
//npm i webpack - g
//npm webpack-dev-server -g
//npm i babel-leoder babel-core babel-preset-env --save
//npm i babel-present-react --save
//npm i babel
// npm i webpack-dev-server --save
//npm i babel-present react --save
//npm i babel-plagin react --save





const path = require('path');

const config = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [
                            "transform-decorators-legacy",
                            "transform-class-properties"
                        ]
                    }
                }
            }
        ]
    },
    devServer:{
        port: 3000
    }
};

module.exports = config;



