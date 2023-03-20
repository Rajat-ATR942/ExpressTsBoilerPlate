import { Request,Response } from "express"
import user from '../../../../../models/user'
export const getAllData=async(req:Request,res:Response)=>{

    // res.send('User Routes')
    try{
    const data=await user.find()
    console.log(data)

    res.status(200).send({
        status:200,
        message:'All users',
        data
    })}catch(err){
        console.log(err)
    }
}


export const registeruser=async(req:Request,res:Response)=>{
    try{
    const{name,rollNo,password}=req.body
    const User=await new user({name,rollNo,password})
    // console.log(req.body)
    // users.push(req.body)
    await User.save()
    res.status(200).send({
        status:200,
        data:{
            name,rollNo,password
        },
        message:"User Registered  successfully"
    })}catch(err){
        console.log(err)
    }
}


export const getUserById=async(req:Request,res:Response)=>{
    try{
        const id:string=req.params.id
        const userFind=await user.findById(id)
        console.log(userFind)
        res.status(201).send({
            status:200,
            data:{
                name:userFind?.name,
                rollNo:userFind?.rollNo,
                password:userFind?.password
            },
            message:"Single User Fetched Successfully"
        }) 
    }catch(err){
        console.log(err)
    }
}

export const deleteUserById=async(req:Request,res:Response)=>{
    try{
        const id=req.params.id
        const deletedUser=await user.deleteOne({_id:id})
        console.log(deletedUser)

        res.status(203).send({
            status:203,
            message:"user deleted Successfully",
            data:deletedUser
        })
    }catch(err){
        console.log(err)
    }
}