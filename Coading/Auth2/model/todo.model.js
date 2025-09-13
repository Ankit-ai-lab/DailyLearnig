const mongoose = require("mongooose")

const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    status:{type:Boolean,default:false},
    userId :{type:mongoose.Schema.types.ObjectId,ref:"User"}

})

const Todo = mongoose.model("Todo",todoSchema)

module.exports = Todo