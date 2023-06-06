const mongoose = require("mongoose")

const userSignup = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
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

module.exports = {userSignup, adminLogin}