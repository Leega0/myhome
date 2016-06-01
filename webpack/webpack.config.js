var path = require('path');
var webpack = require('webpack');

module.exports ={
	entry:path.resolve(__dirname,'app/main.js'),
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.css$/, loader:'style!css'}
		]
	},
	plugins:[
		new webpack.BannerPlugin('This file is create by leega0')
	]
}