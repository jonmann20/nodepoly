'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
	    'foo-bar': './components/foo-bar.html',
	    'foo-bar-two': './components/foo-bar-two.html',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './polymer_assets'),
		publicPath: 'polymer_assets/'
	},
	resolve: {
		modules: ['node_modules', 'bower_components'],
		descriptionFiles: ['package.json', 'bower.json']
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [{
			test: /\.html/,
			use: [
				{
					loader: 'polymer-webpack-loader'
				}
			]
		}]
	}
};