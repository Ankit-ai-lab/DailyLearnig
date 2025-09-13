/* const mongoose = require('mongoose')

const connectDB = async() =>{
try {
    await mongoose.connect(process.env.MONGO_UR)
    console.log("DB connected")
} catch (error) {
    console.log("DB not connected",error.massage)
process.exit(1)
}
}
module.exports = connectDB
 */
const mongoose = require("mongodb://127.0.0.1:27017/testauth");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" DB not connected:", error.message);
   
  }
};

module.exports = connectDB;
