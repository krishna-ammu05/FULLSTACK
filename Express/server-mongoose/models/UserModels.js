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
        type:String,
        required:true
    },
    address:{
        type:String,
        //required:true
    },
})

const Users = mongoose.model("Users",UserSchema)

module.exports=Users