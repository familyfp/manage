/**
 * Created by qxb-810 on 2018/4/3.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/************** 定义模式loginSchema **************/
const loginSchema = new Schema({
  account : String,
  password : String
});

const Models = {
  Login : mongoose.model('Login',loginSchema)
};

module.exports = Models;
