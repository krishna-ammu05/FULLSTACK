const mongoose = require('mongoose')

const OdersSchema=new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        required:true
    },
    shippingDate:{
        type:Date,
        required:true
    },
})

const Orders = mongoose.model("Orders",OdersSchema)

module.exports=mongoose