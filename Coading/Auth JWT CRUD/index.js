const express= require('express')
const helmet = require('helmet');
const cors = require('cors')

const mongoose = require("mongoose")
const cookieparser = require("cookie-parser") 

const app  =express('require')
app.use(cors())
app.use(helmet())
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));



mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
   
        console.log("Data base conected")
    })
    .catch((err)=>{
    console.log(err)
})


app.get('/',(req,res)=>{
    res.json({massage:"hello word from server.js"})
})


app.listen(process.env.PORT,()=>{
    console.log("listning..")
});

