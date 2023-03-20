import { Schema, model } from "mongoose";
import * as Interface from '../src/api/interfaces/interface'



const UserSchema=new Schema<Interface.User>({
    name:{type:String,required:true},
    password:{type:String,required:true},
    rollNo:{type:Number}
})

const user=model<Interface.User>('User',UserSchema)

export default user


