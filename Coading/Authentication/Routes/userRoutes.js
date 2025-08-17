const express = require('express')   // ✅ Import express
const authRouter = express.Router()      // ✅ Create router
const bcrypt  = require("bcrypt")    // ✅ Import bcrypt for hashing
const Users = require('../model/users') // ✅ Import mongoose user model

// ---------------- SIGNUP ROUTE ----------------
authRouter.post("/signup", async(req,res)=>{
    try {
        const {username, email,password}= req.body;  // ✅ Destructure data from client body

        // 1. ✅ Check if user already exists by email
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ msg: 'Email already registered' }); 
            // ✅ If email already used → return 409 Conflict
        }

        // 2. ✅ Hash the password (saltRounds = 10)
        const hash = await bcrypt.hash(password,10);
      
        // 3. ✅ Save new user to DB
        const newuser = new Users({username,email,password:hash}); 
        await newuser.save()

        // 4. ✅ Send success response (not sending hashed password back)
        res.status(201).json({ msg: "User created successfully", user: { username, email } });
   
    } catch (error) {
        console.error(error); // ✅ Print error in backend console
        res.status(500).json({msg:'something went wrong'}) // ✅ Send generic error message
    }
})

module.exports = authRouter // ✅ Export router for use in app.js / server.js
