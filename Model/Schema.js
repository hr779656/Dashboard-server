const mongoose = require("mongoose")

const userLogin = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

const adminLogin = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Secretkey:{
        type:String,
        required:true
    }
})

module.exports = {userLogin, adminLogin}