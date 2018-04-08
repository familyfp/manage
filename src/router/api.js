/**
 * Created by qxb-810 on 2018/4/8.
 */
const login=require('../../controller/login');
const user=require('../../controller/userInfo');
const express = require('express');
const app = express();
app.use('../../controller/userInfo', user);
app.use('../../controller/login', login);


module.exports =app;

