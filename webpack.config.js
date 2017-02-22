const path = require('path'),
      webpack = require('webpack');

module.exports = {
	entry: {
		app: path.join(__dirname, '/app/App.js')
	},

	output: {
		path: path.join(__dirname, '/public/dist'),
		filename: 'app.min.js'
	},

	devServer: {
	    inline: true,
	    contentBase: './public/',
	    port: 8080
	},

	module: {
		loaders: [{
			test: /\.js(x)?$/,
			exclude: /node_module/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},

	watch: true
}