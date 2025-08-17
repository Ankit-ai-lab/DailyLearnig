const express = require('express')
const todoModel = require('../models/todomodel')
const authmiddleWare = require('../middlewares/authmiddle')

const todoRouter = express.Router()



todoRouter.post('/addtodo'  , authmiddleWare, async(req,res) =>{
  try {
    let todo = await todoModel.create(req.body)
    res.status(201).json({msg:"todo added" , todo})
  } catch (error) {
    res.status(500).json({msg:"todo not added"})
  }
})

module.exports = todoRouter     