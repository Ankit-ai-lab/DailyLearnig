const mongoose = require('mongoose');   
require('dotenv').config();

const connectDB = async()=>{
    try {
        await mongoose.connect(" mongodb://127.0.0.1:27017/Auth2");
        console.log("Database connected");
    } catch (error) {
        console.log("Erroor in DB connection", error)
    }
}

module.exports = connectDB