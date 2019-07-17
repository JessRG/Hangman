// Load node path library which we assign to a variable using the require function
const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    // output object's path property for file path must be an absolute path
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    // module property that webpack provides to us; allows us to configure the JS module system (webpack expects this to be an object)
        // rules property [array of objects] allows us to specify however many rules we want (babel)
        // test property (regular expression specified within forward slashes)
            // 1. back slash (\) to escape the . (dot . has a specific meaning in regular expressions, therefore, must be escaped)
            // 2. dollar sign ($) ensures that the specified string within the regular expression is at the end or beginning (in this case at the end)
        // exclude property used to exclude all js files in node_modules (regular expression specified within forward slashes)
        // use property to tell the rule(s) what loaders to use
        module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    // devServer property (webpack-dev-server) used to server up the content
        // contentBase property must be an absolute path for to let the dev server know where the folder we are trying to serve up lives
        // publicPath property must be a string which tells the dev server where -relative to the public folder- webpack puts our assests (in this case within the scripts folder)
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    // root property (devtool) set it equal to a string -> source-map (makes it so our browser devtools provide the source js files (src) instead of bundle.js)
    devtool: 'source-map'
}
// __dirname --> \Users\Jesus\Desktop\JS-bootcamp\boilerplate
// \Users\Jesus\Desktop\JS-bootcamp\boilerplate\public\scripts