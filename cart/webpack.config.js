const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPLugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPLugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}