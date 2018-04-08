/**
 * Created by qxb-810 on 2018/4/4.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/************** 定义模式loginSchema **************/
const userSchema = new Schema({
  userName : String,
  userId : Number
});

const userInfo = {
  User : mongoose.model('User',userSchema)
};

module.exports = userInfo;
