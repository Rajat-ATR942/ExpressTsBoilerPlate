import express,{Router,Request,Response} from 'express'
import * as Interfaces from '../../interfaces'
// import * as Controller from '../admin'
class AdminRouter implements Interfaces.Route{
    public router=express.Router()
    public basePath='/admin'
    constructor(){
        this.initialiseRoutes()
    }

    private initialiseRoutes():void{
        this.router
            .get(`${this.basePath}`,(req:Request,res:Response):void=>{
                res.send('Admin ')
                console.log('Admin loggedin')
            })
            .post(`${this.basePath}/login`,(req:Request,res:Response):void=>{
                const {name,email,password}=req.body
                res.status(200).send({
                    status:200,
                    data:{name,email,password},
                    message:'Admin Logged in Successfully'
                })
            })
    }
}
export default new AdminRouter()