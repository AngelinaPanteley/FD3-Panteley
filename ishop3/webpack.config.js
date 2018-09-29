const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin"); //объединение CSS-кода в один CSS-бандл

const extractCSS = new ExtractTextPlugin({
    filename: "bundle.css" // файл бандл для css
});

module.exports = {
    entry: "./App.js", // основной файл приложения
    output: {
        path: __dirname, // путь к каталогу выходных файлов
        filename: "bundle.js"  // название создаваемого файла 
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ["css-loader"] //загрузка содержимого стилевых файлов, разрешение зависимостей — @import, url(...)
                })
            },
            {
                test: /\.ico$/,
                loader: "file-loader",
                query: { mimetype: "image/x-icon" }
            }
        ]
    },
    plugins: [
        extractCSS
    ]
}