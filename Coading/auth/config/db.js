const mongoose = require('mongoose')

const connectDB = async() =>{
  try {
    await mongoose.connect(process.env.mongo_URI)
    console.log('connected to db')
  } catch (error) {
    console.log('failed to db')
  }
}

module.exports = connectDB