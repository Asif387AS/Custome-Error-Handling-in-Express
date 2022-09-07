import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:"String",
        require:[true,"Enter your name"]
    },
    email:{
        type:"String",
        require:[true,"Enter your name"],
        unique:true
    },
})
export const User=mongoose.model('User',userSchema)
