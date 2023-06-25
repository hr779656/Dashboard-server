const express = require("express")
const router = express.Router()
const auth_model = require("../Model/Model")
require("dotenv").config()


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
        res.status(404).send("user Not Saved In data bases")
    }

})


router.post("/admin-signup", async (req, res) => {
    if (req.body.Secretkey === process.env.Secretkey) {
      try {
        const adminSignup = new auth_model.adminSignup_model({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          Secretkey: req.body.Secretkey
        });
  
        const output = await adminSignup.save();
        res.status(200).json(output);
      } catch {
        res.status(404).send("admin not saved in data base");
      }
    } else {
      res.status(404).send("your secret key is not correct");
    }
  });


router.post("/user-login", async (req, res)=>{

    try{
        const userlogin = await auth_model.userSignup_model.findOne({email:req.body.email})
        res.status(200).json({msg:"this user is add on data base", userlogin})
    }catch{
        res.status(404).send("user Not Saved In data bases")
    }

})  

router.post("/admin-login", async (req, res)=>{

    try{
        const adminlogin = await auth_model.adminSignup_model.findOne({Secretkey:req.body.Secretkey})
        if(req.body.Secretkey == adminlogin.Secretkey){
            res.status(200).json({msg:"yes user has saved data based"})
        }
    }catch{
        res.status(404).send("admin Not Saved In data bases")
    }

})



module.exports = router

