const connectDB = require('./config/db')
const express = require("express")
require('dotenv').config()
const app = express()

const authRouter = require("./Routes/userRoutes")

//const PORT = process.env.PORT || 4000

app.use(express.json())
connectDB()
app.use('/auth',authRouter)

app.get("/",(req,res)=>{
     
        res.send("this is working")

    
    
})



app.listen(8000,()=>{
    console.log(`server runing at http://localhost:${3000}`)
})