const path = require('path')

module.exports = {
    entry : path.join(__dirname , "src/index.js"),
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname , "dist")
    },
    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            },
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.(gif|jpeg|png|jpg)$/,
                use :[
                    {
                        loader :'url-loader',
                        options : {
                            limit : 1024,
                            name :'[name]_note.[ext]'
                        }
                    }
                ]
            },
            {
                test : /\.styl$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    }
}