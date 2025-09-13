const express = require("express");
const TodoModel = require("../models/todo.model");
const authMiddleware = require("../middlewares/auth.middleware");

const TodoRouter = express.Router();
/// All the routes of Todos are protected
/// Not opened for non logged In users


TodoRouter.post("/add-todo", authMiddleware,async (req,res)=>{
    /// title, status are coming from req.body
    /// This route is protected route
    // Only authenticated or logged In users are allowed
    try{
     ///console.log(req.user)
     // Attached the userID from Auth Middleware
     let todo = await TodoModel.create({...req.body, userId:req.user});
     res.status(200).json({message:"Todo Added", todo})
    }catch(err){
        res.status(500).json({ message: "Something went wrong" });
    }
})


TodoRouter.get("/alltodos",authMiddleware ,async(req,res)=>{
    
    try{
        //console.log(req.user)
        // Attached the userID from Auth Middleware
        let todos = await TodoModel.find({userId:req.user});
        res.status(200).json({message:"Todos List",todos})
       }catch(err){
           res.status(500).json({ message: "Something went wrong" });
       }
})
module.exports =TodoRouter;
