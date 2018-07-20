var path = require('path');    // 引入path模块

module.exports = {
    entry: {
        login: path.join(__dirname,'./app/Login.js'),    // 登录页面
    },
    output:{
        path:path.join(__dirname,'dist'),        // 打包到哪个路径下，
        filename:'[name].bundle.js'　　　　　　　 // 打包成功后的文件名称
    },
    module: {  
        rules: [  
            {  
                test: /\.css$/,  
                use: ['style-loader', 'css-loader']  
            },
            {  
                test: /\.html$/,  
                use: ['html-loader']  
            }  
        ]  
    }
}
