// /sudo npm install -g webpack/ we use webpack to bundle javascript

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: "./app/temp/scripts",
    filename: "App.js"
  },
  // npm install babel-core babel-loader babel-preset-es20 --save-dev
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
