const mongoose = require("mongoose")
const authSchema = require("./Schema")

const userSignup_model = new mongoose.model("users", authSchema.userSignup)
const adminLogin_model = new mongoose.model("admin", authSchema.adminLogin)

module.exports = {userSignup_model, adminLogin_model}
