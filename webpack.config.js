const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

var env = process.env.NODE_ENV || 'development';
var plugins = [new HtmlWebpackPlugin({
				template: 'src/index.html',
				filename: 'index.html',
				inject: 'body'
			})];

if (env === 'production'){
	plugins.push(
    new UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
};

module.exports = {
	entry: ['react-hot-loader/patch',
			 './src/index.js'],
	output: {
		path: path.resolve(__dirname,'build'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				loader: "babel-loader"
				},
		    	{
		        test: /\.css$/,
		        use: [
		            { loader: 'style-loader'},
		            {
		                loader: 'css-loader',
		                options: {
		                    modules: true
		                }
		            }
		        	]
    			}
		]
	},
	plugins: plugins
};


console.log('NODE_ENV:', env);