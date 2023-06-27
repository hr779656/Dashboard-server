const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()



//  MIDDLEWARES ====================
app.use(cors());
app.use(express.json())

const userSignup_Route = require("./Controller/LOgin")
app.use("/api",userSignup_Route)

const userLogin_Route = require("./Controller/LOgin")
app.use("/api",userLogin_Route)

const adminSignup_Route = require("./Controller/LOgin")
app.use("/api",adminSignup_Route)

const Main_router = require("./Controller/Main")
app.use(Main_router)

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