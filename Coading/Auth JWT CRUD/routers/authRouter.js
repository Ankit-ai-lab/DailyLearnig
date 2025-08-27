const express = require('express')
const router = express.Router()

router.post('/signup',(res,req)=>{
    res.json({massage:"signup Success"})
})