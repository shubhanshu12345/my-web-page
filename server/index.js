const express=require("express");
const app=express();
const path=require('path');
const mongoose=require("mongoose");
const dotenv=require("dotenv");

const cookieParser = require("cookie-parser");

app.use(express.urlencoded());
app.use(cookieParser());

dotenv.config({path:"./config.env"});

const db=require("./config/mongoose")
console.log(db);
app.use(express.json());
const port=process.env.PORT ||5000;



const User =require('./model/userSchema')

app.use(require('./router/auth'));



app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running at",port);
    }
})