const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|avif|jpe?g)$/,
                type: 'asset/resource', // Используем новый синтаксис для обработки изображений
                generator: {
                    filename: 'assets/images/[name][ext]' // Указываем путь для сохранения изображений
                }
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
    })],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
    },
};
