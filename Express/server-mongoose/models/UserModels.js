const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{//url
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    },
    address:{
        type:string,
        //required:true
    },
})

const Users = mongoose.model("Users",UserSchema)

module.exports=mongoose