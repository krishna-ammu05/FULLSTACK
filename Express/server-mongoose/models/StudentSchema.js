const mongoose = require('mongoose')

const StudentSchema=new mongoose.Schema({
    sname:{
        type:String,
        required:true
    },
    rollno:{//url
        type:number,
        required:true,
        unique:true
    },
    smarks:{
        type:Number,
        required:true
    },
    sgrade:{
        type:char,
        required:true
    },
    semail:{
        type:Number,
        required:true,
        unique:true,
    },
})

const Students = mongoose.model("Students",StudentSchema)

module.exports=mongoose