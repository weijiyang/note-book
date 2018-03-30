const path = require('path')

module.exports = {
    entry : path.join(__dirname , "src/index.js"),
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname , "dist")
    },
    moudle : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            },
            {
                test : /\.css$/,
                loader : 'css-loader'
            }
        ]
    }
}