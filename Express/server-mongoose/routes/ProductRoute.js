const express=require('express')
const router=express.Router()
const Products=require('../models/ProductsModels')
//getting data from bend(async)

//METHOD:GET=>localhost:2000/products/all
router.get('/all',async(req,res)=>{
    try{
        const products = await Products.find()
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({message:error})
    }
})
//all && add are the end points ,parameteric mtd
//METHOD: POST =>localhost:2000/products/add
router.post('/add',async(req,res)=>{
    try{
        const ProductData = new Products(req.body)
        const { name, img , price}=ProductData
        if(!name|| !img|| !price){
            res.status(401).json({message:"All fields required"})
        }
        const storedata =await ProductData.save()
        res.status(201).json(ProductData)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.put('/edit/:id',async(req,res)=>{
    try{
            const id = req.params.id
            const existingproduct= await Products.findOne({_id:id})
            if(!existingproduct){
                res.status(404).json({message:"Product not found"})
            }
            const updateproduct = await Products.findByIdAndUpdate(id,req.body, {new:true})
            res.status(200).json(updateproduct)
    }catch(error){
            res.status(500).json({message:error.message})
    }
})


router.delete('/delete/:id',async(req,res)=>{
    try{
         const id =req.params.id
         const existingproduct= await Products.findOne({_id:id})
         if(!existingproduct){
            res.status(404).json({message:"Product not found"})
         }
         await Products.findByIdAndDelete(id)
         res.status(200).json({message:"Product Deleted"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


module.exports= router
// 1.GET->READ
// 2.POST->CREATE
// 3.PUT->UPDATE 
// 4.DELETE->DELETE
//mongodb+srv://krishnaveni5104:<db_password>@in-aws.o5wa3.mongodb.net/?retryWrites=true&w=majority&appName=In-AWS