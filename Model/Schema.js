const mongoose = require("mongoose")


// USER SCHEMA =========================

const userSignup = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


// ADMIN SCHEMA =========================

const adminSignup = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
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


// PRODUCT SCHEMA ========================= 

const hr_products = new mongoose.Schema({
    Product_Name:{
        type:String,
        unique:true,
        required:true
    },
    
    Quantity:{
        type:Number,
        required:true
    },
    Cost_Price:{
        type:Number,
        required:true
    },
    Sailing_Price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

module.exports = {userSignup, adminSignup, hr_products}