import express,{Router,Request,Response} from 'express'
import * as Interfaces from '../../interfaces'

// getting controller fOR getting all data 

import * as Controller from './auth/userController'


class userRouter implements Interfaces.Route{
    public router=express.Router();
    public basePath='/';
    
    constructor(){
        // this.router=
        // this.basePath=`/`
        
        this.initializeRoutes();
    }
    private initializeRoutes():void{
        this.router
            // .all(`${this.basePath}/*`)
            .get(`${this.basePath}`,
            Controller.getAllData)
            // added post request successfully
            .post(`${this.basePath}login`,Controller.registeruser)
            .get(`${this.basePath}:id`,Controller.getUserById)
            .delete(`${this.basePath}:id`,Controller.deleteUserById)
    }

}

export default new userRouter()