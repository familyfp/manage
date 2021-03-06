/**
 * Created by qxb-810 on 2018/4/2.
 */
// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
db.once('close',()=>console.log('Mongo connection close'));

// /************** 定义模式loginSchema **************/
// const loginSchema = mongoose.Schema({
//   account : String,
//   password : String
// });
//
// const userInfoSchema =mongoose.Schema({
//     userId:Number,
//     userName:String
// });
//
// /************** 定义模型Model **************/
// const Models = {
//   Login : mongoose.model('Login',loginSchema)
// };

// module.exports = Models;
module.exports = db;
