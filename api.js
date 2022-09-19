const express = require('express') ;
const app = express();//创建服务实例
app.use(express.urlencoded({extended:false}))//解析表单数据的中间件
const router = require("./index")
app.use('/api',router)

app.listen(80,function(){
    console.log("服务启动了")
})