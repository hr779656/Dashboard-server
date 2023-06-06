const mongoose = require("mongoose")
const authSchema = require("./Schema")

const userSignup_model = new mongoose.model("users", authSchema.userSignup)
const adminSignup_model = new mongoose.model("admin", authSchema.adminSignup)

module.exports = {userSignup_model, adminSignup_model}
