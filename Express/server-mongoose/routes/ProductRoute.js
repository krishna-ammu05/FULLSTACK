const express=require('express')
const router=express.Router()
const Products=require('../models/ProductsModels')
//getting data from bend(async)

router.get('/all',async(req,res)=>{
    try{
        const products = await Products.find()
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({message:error})
    }
})




// 1.GET->READ
// 2.POST->CREATE
// 3.PUT->UPDATE 
// 4.DELETE->DELETE