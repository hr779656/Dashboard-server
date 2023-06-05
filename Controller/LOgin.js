const express = require("express")
const router = express.Router()
const auth_model = require("../Model/Model")


router.post("/useR-login", async (req, res)=>{
    const myUser_login = await auth_model.userLogin_model.findOne({ username:req.body.username })
    if(
        myUser_login.username != req.body.username
    ){
    
    const login_data = await new auth_model.userLogin_model({
        username:req.body.username,
        password:req.body.password
    })

    try{
        const output = await login_data.save();
        res.status(200).json(output)
    }catch{
        res.status(404).send("login user Not Saved In data bases")
    }

    }else{
        res.status(404).send("user Already saved")
    }
})


router.post("/admin-login", async (req, res)=>{
    const admin_login = await auth_model.adminLogin_model.findOne({ username:req.body.username })

    if(
        admin_login.username != req.body.username
    ){
        const login_data = await new auth_model.adminLogin_model({
            username:req.body.username,
            password:req.body.password,
            Secretkey:req.body.Secretkey
        })

        try{
            const output = await login_data.save();
            res.status(200).json(output)
        }catch{
            res.status(404).send("admin user Not Saved In data bases")
        }

    }else{
        res.status(404).send("Admin already saved")
    }
   
})




module.exports = router

