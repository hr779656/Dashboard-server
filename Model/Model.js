const mongoose = require("mongoose")
const authSchema = require("./Schema")

const userLogin_model = new mongoose.model("users", authSchema.userLogin)
const adminLogin_model = new mongoose.model("admin", authSchema.adminLogin)

module.exports = {userLogin_model, adminLogin_model}
