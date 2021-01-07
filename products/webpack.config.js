const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPLugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPLugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}