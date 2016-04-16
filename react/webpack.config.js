module.exports = {
  entry:'./app/main.js',
  output:{
    path:'./build',
    filename:'bundle.js'
  },
  module:{
    loaders:[
    {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  resolve:{
    extensions: ['', '.js', '.json']
  }
}