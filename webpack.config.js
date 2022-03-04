const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
	resolve
} = require("path");
const {
	BundleAnalyzerPlugin
} = require("webpack-bundle-analyzer");

module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'index.[contenthash].js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif|mp3)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new BundleAnalyzerPlugin()
	],
	devServer: {
		port: 3000
	}
}