const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"  
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.png$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 250,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]

    }
}
