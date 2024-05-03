import mongoose, { Schema, model } from "mongoose";

const userSchema = Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        unique:true
    },
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        default:`../utils/user.png`
    }
})

const User = model("User", userSchema)
export default User