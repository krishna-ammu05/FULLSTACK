const express = require('express')
const router = express.Router()
const Users=require('../models/UserModels')
const { trusted } = require('mongoose')

router.get('/all',async(req,res)=>
{
    try{
        const users = await Users.find()
        return res.status(200).json(users)
    }
    catch(error){
        return res.status(500).json({message:error})
    }
})
//POST
router.post('/add',async(req,res)=>{
    try{
        const UserData = new Users(req.body)
        const {name,email,phone,password } = UserData
        if(!name||!email||!phone||!password){
            return res.status(401).json({message:"All fields required"})  
        }
        await UserData.save()
        return res.status(201).json(UserData)
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
})


//PUT
router.put('/edit/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const existinguser = await Users.findOne({_id:id})
        if(!existinguser){
            res.status(404).json({message:"User not found"})
        }
        const updateuser = await Users.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateuser)
    }  
    catch(error){
        res.status(500).json({message:error.message})
    }  
})

//DELETE
router.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const existinguser = await Users.findOne({_id:id})
        if(!existinguser){
            res.status(404).json({message:"User not found"})
        }
        await Users.findByIdAndDelete(id)
        res.status(200).json({message:"User Deleted"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
module.exports= router