const express = require('express')
const connectDB = require('./config/db')
const router = require('./routes/userroutes')
const todoRouter = require('./routes/todoroutes')
require('dotenv').config()
const app = express()
 
const PORT = process.env.PORT || 4000
app.use(express.json())

app.use('/users' , router)
app.use('/todorouter' , todoRouter)

app.get('/test' , async(req ,res) =>{
      try {
        res.status(200).json('this is working')
      } catch (error) {
        res.status(200).json('something went wrong')
      }
} )

connectDB()

app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`)
})