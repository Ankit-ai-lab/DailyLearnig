const express = require('express')
const router = express.Router() 
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const jwt = require("jsonwebtoken")
const usermodel = require('../models/model')

//sign up 
// client user,email and pasword from req body
//bcrypt helps to hash the password
router.post('/signup', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // 1. Check if user already exists
      const existingUser = await usermodel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ msg: 'Email already registered' });
      }
  
      // 2. Hash password
      const hash = await bcrypt.hash(password, saltRounds);
  
      // 3. Save new user
      await usermodel.create({ username, email, password: hash });
  
      res.status(201).json({ msg: 'Signup success' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Something went wrong' });
    }
  });
  


router.post('/login' , async(req,res) =>{
    // email and pass
    try {
        //check user is present if no send response as signup   
        // if yes send res as compare 
        const {email,password} = req.body
        const user = await usermodel.findOne({email})
        if(!user){
            res.status(404).json({msg:"user not found please signup"})
        }else{
            let hash = user.password
            bcrypt.compare(password, hash, function(err,result) {
                if(result){
                    var token = jwt.sign({ UserId:  user._id}, process.env.JWT_SECTRET);
                    console.log(token)
                    res.status(200).json({msg:"login success" , token})
                    console.log(result)
                }else{
                    res.status(401).json('Wrong password')
                    console.log(result)
                }
            })
        }
    } catch (error) {
        res.status(500).json('something went wrong') 
    }
})
module.exports = router