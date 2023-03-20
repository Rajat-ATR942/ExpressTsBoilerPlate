
// database connection here 
import { connect } from "mongoose";

// importing user schema
// import user from "../models/user";

export const dbConnect=async ()=>{

    try{
        const conn=await connect(`mongodb://127.0.0.1:27017/user`)
        // console.log(conn)
        console.log(`DB Connected ${conn}`)
    }catch(err){
        console.log(err)
    }
    
   
}


