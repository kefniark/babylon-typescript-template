const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" }
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
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
