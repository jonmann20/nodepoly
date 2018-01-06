'use strict';

const path = require('path');
const webpack = require('webpack');

const browserList = [
	'last 2 Chrome versions',
	'last 2 Firefox versions',
	'last 2 Edge versions',
	'last 2 Safari versions',
	'last 2 iOS versions',
	'last 2 ChromeAndroid versions',
	'ie 11'
];

module.exports = {
	entry: {
		'component-globals': './component-globals.html',
		'component-a': './component-a.html',
		'component-b': './component-b.html'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/'
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'bower_components'),
			path.resolve(__dirname, 'node_modules')
		],
		descriptionFiles: ['bower.json', 'package.json']
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.html/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [['env', {
								targets: {
									browsers: browserList
								}
							}]],
							plugins: ['syntax-dynamic-import']
						}
					},
					{
						loader: 'polymer-webpack-loader'
					}
				]
			},
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [['env', {
							targets: {
								browsers: browserList
							}
						}]]
					}
				}]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [{
					loader: 'file-loader'
				}]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': "'production'"
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
};