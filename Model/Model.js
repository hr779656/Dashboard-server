const mongoose = require("mongoose")
const authSchema = require("./Schema")

const userSignup_model = new mongoose.model("users", authSchema.userSignup)
const adminSignup_model = new mongoose.model("admin", authSchema.adminSignup)
const productModel = new mongoose.model("products", authSchema.hr_products)

module.exports = {userSignup_model, adminSignup_model, productModel}
