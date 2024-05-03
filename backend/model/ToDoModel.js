import mongoose, { Types } from "mongoose";

const todoSchema = mongoose.Schema({
  task:{
    type:String,
    required:true
  },
  user:{
    type:Types.ObjectId,
    ref:"User"
  }
})

const Todo = mongoose.model("Todo", todoSchema)
export default Todo
