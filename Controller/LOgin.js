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
    if (req.body.Secretkey === process.env.SECRETKEY) {
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
        if(userlogin.email == req.body.email){
          if(userlogin.password == req.body.password){
             res.status(200).json({msg:"this user is add on data base", userlogin})
          }else{
            res.status(402).send("your password is incorrect")
          }
        }
    }catch{
        res.status(404).send("user Not Saved In data bases")
    }

})  

router.post("/admin-login", async (req, res) => {
  if (req.body.Secretkey === process.env.SECRETKEY) {
      try {
          const adminlogin = await auth_model.adminSignup_model.findOne({ Secretkey: req.body.Secretkey });
          if (adminlogin.email == req.body.email) {
            if(adminlogin.password == req.body.password){
              res.status(200).json({ msg: "User found in the database", adminlogin});
            } else {
              res.status(402).json({ msg: "your password is incorrect" });
            }
          } else {
              res.status(404).json({ msg: "Admin not found in the database" });
          }
      } catch (error) {
          res.status(500).json({ msg: "Internal server error" });
      }
  } else {
      res.status(401).json({ msg: "Incorrect secret key" });
  }
});


module.exports = router

