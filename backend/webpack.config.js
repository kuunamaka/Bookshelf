const path = require('path');
// Docs of webpack.config.js:
// https://webpack.js.org/concepts/#entry
module.exports = {
    entry: {
        bundle: './src/app.ts'
    },  
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js' // will be 'bundle.js'
    },
    resolve: {
        extensions:['.ts', '.js']
    },
    devServer: {
        static: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.ts$/,loader: 'ts-loader'
            }
        ]
    }
}
