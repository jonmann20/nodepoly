'use strict';

const path = require('path');

module.exports = {
	entry: ['./node_modules/@polymer/iron-image/iron-image.js'],
	output: {
		filename: 'iron-image.bundle.js',
		path: path.resolve(__dirname, './assets'),
		publicPath: 'assets'
	},
	resolve: {
		modules: ['node_modules'],
		descriptionFiles: ['package.json']
	},
	// devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.html/,
			use: [
				{
					loader: 'polymer-webpack-loader'
				}
			]
		}]
	},
	performance: {
		hints: false
	},
	mode: 'production'
};