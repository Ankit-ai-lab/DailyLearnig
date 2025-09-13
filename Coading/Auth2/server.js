const express = require("express")
const dotenv = require("dotenv")
const PORT = process.env.PORT || 3000

const app = express()

app.get("test",(req,res)=>{
  try {
    res.status(200).json({msg:"this is test routes0"})

  } catch (error) {
    res.status(500).json({msg:"SOmething went wrong"})
  }

})

app.listen(PORT,()=>{
console.log("Server started")
})