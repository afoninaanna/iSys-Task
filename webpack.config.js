const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /node_modules/,  // исключаем из обработки папку node_modules
                use: [
                    {
                        loader: "babel-loader",   // определяем загрузчик
                        options: {
                            presets: ["@babel/preset-react"]    // используемые плагины
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                    loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                        {
                            loader: "css-loader",
                            options: {
                                modules: true
                            }
                        }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};

