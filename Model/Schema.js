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

const adminSignup = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
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

module.exports = {userSignup, adminSignup}