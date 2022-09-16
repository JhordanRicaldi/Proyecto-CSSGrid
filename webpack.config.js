//lamando al plugin de html webpack
const HtmlWebpackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    module:{
        rules:[
            {
                // que archivos son en los que voy a trabajar esta regla
                test: /\.js$/i, // i indica archivos con mayuscula o minisculas
                //Excluye estas carpetas (transpilar con babel)
                exclude: /node_modules/,
                // Cual es el cargador que voy a usar
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/i,
                // corchetes para usar mas de 1 loader
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]

            },
            {
                test: /\.css$/i,
                // corchetes para usar mas de 1 loader
                use: [ MiniCssExtractPlugin.loader,"css-loader" ]

            },
            // {
            //   test: /\.(jpe?g|png|gif|svg|webp)$/i,
            //   use: ["file-loader?name=assets/[name].[ext]"]

            // }
            // {
            //     type: "asset",
            //     test: /\.(jpe?g|png|gif|svg|webp)$/i,

            // }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            // indicar el archivo base para generar la salida
            template: "./src/index.html",
            // como quiero que se llame en la carpeta dist 
            filename: "./index.html",
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: "./src/prueba.html",
            filename: "./prueba.html",
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            //
            patterns: [
                { from: "src/assets", to: "assets/" },
            ],
        })

    ],
}