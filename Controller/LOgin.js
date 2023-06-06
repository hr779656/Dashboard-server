const express = require("express")
const router = express.Router()
const auth_model = require("../Model/Model")


router.post("/user-signup", async (req, res)=>{
    
   
    const userSignUp = new auth_model.userSignup_model({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    try{
        const output = await userSignUp.save();
        res.status(200).json(output)
    }catch{
        res.status(404).send("login user Not Saved In data bases")
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

