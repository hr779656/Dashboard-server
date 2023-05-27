const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()



//  MIDDLEWARES ====================
app.use(cors())
app.use(express.json())

const userLOgin_Route = require("./Controller/LOgin")
app.use("/api",userLOgin_Route)

const adminLogin_Route = require("./Controller/LOgin")
app.use("/api",adminLogin_Route)



//  DATA BASE CONNECTION ===========
mongoose.connect(process.env.CONNECTION_STRING)

const db = mongoose.connection;

db.on("error", (error)=>{
    console.log(error)
})
db.once("connected", ()=>{
    console.log("Data Base Connected");
})


// SERVER STARTED ====================
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`server started ${port}`)
})