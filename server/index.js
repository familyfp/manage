/**
 * Created by qxb-810 on 2018/4/2.
 */
// 引入编写好的api
// const api = require('./api');
// const api = require('../controller/login');
const api =require('../src/router/api');
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser')
// 引入Express
const express = require('express');
const app = express();


// app.all('*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Credentials", true); //可以带cookies
//   res.header("X-Powered-By", '3.2.1')
//   if (req.method == 'OPTIONS') {
//     res.send(200);
//   } else {
//     next();
//   }
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// router(app);
app.use(api);
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))
// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
})
// 监听8088端口
app.listen(8089);
console.log('success listen…………');
