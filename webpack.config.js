const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'game.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{ test: /\.css$/, use: [ { loader: MiniCssExtractPlugin.loader }, "css-loader"] }
		]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: "[name].css", chunkFilename: "[id].css" })
	],
	mode: "development",
	externals: {
		"oimo": true,
		"cannon": true,
		"earcut": true
	},
	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 250000,
			maxSize: 1000000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 1,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	}
};
