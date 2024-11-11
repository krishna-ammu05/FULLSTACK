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
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        required: true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})

const Users = mongoose.model("Users",UserSchema)

module.exports=Users