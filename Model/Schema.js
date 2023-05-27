const mongoose = require("mongoose")

const userLogin = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const adminLogin = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Secretkey:{
        type:String,
        required:true
    }
})

module.exports = {userLogin, adminLogin}