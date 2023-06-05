const express = require("express")
const Main_router = express.Router()
// const auth_model = require("../Model/Model"


Main_router.get("/", async (req, res)=>{
    res.status(200).json({
        userLogin:"https://hr-textile-dashboard.cyclic.app/api/user-login",
        adminLogin:"https://hr-textile-dashboard.cyclic.app/api/admin-login"
    })
})




module.exports = Main_router