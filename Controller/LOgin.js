const express = require("express")
const router = express.Router()
const auth_model = require("../Model/Model")


router.post("/user-login", async (req, res)=>{
    const myUser_login = new auth_model.userLogin_model({
        username:req.body.username,
        password:req.body.password
    })
    try{
        const output = await myUser_login.save();
        res.status(200).json(output)
    }catch{
        res.status(404).send("login user Not Saved In data bases")
    }
   
})


router.post("/admin-login", async (req, res)=>{
    const admin_login = new auth_model.adminLogin_model({
        username:req.body.username,
        password:req.body.password,
        Secretkey:req.body.Secretkey
    })
    try{
        const output = await admin_login.save();
        res.status(200).json(output)
    }catch{
        res.status(404).send("admin user Not Saved In data bases")
    }
   
})





module.exports = router

