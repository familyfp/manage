/**
 * Created by qxb-810 on 2018/4/4.
 */
"use strict";
const db=require('../server/db');
const userModel=require('../model/userInfo');
const express = require('express');
const router = express.Router();

// 创建账号接口
router.post('/api/userInfo/createInfo',(req,res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newAccount = new userModel.User({
    userName : req.body.userName,
    userId : req.body.userId
  });
  // 保存数据newAccount数据进mongoDB
  newAccount.save((err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('createAccount successed');
    }
  });
});

// 获取已有账号接口
router.get('/api/userInfo/getUser',(req,res) => {
  // 通过模型去查找数据库
  userModel.User.find((err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
