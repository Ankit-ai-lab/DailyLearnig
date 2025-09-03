/* const express= require('express')
require('dotenv').config()
const helmet = require('helmet');
const cors = require('cors')
const mongoose = require("mongoose")


const authRouter = require("./routers/authRouter")

const app  =express()
app.use(cors())
app.use(helmet())
const cookieParser = require("cookie-parser");
app.use(cookieParser());


app.use(express.json())
app.use(express.urlencoded({extended:true}));



mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
   
        console.log("Data base conected")
    })
    .catch((err)=>{
    console.log(err)
})

app.use('/auth',authRouter)
app.get('/',(req,res)=>{
    res.json({message:"hello word from server.js"})
})


app.listen(process.env.PORT,()=>{
    console.log("listning..")
});

 */

const express = require('express');
const authRouter = require('./routers/authRouter');

const app = express();
app.use(express.json());

// Mount router
/* app.post('/signup', (req, res) => {
    res.json({ message: 'Signup success' });
}); */
app.use('/auth', authRouter)

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
