import  express,{Application,Request,Response,NextFunction}  from "express";
import userRouter from "./api/modules/user/userRoute";
import AdminRouter from "./api/modules/admin/adminRoutes"
// import db connection
import * as Connection from '../helper/db.helper'
class App{
    public app:Application
    public port:number
    public userRouter
    public AdminRouter
    public connection
    constructor(port:number){
        this.app=express()
        this.port=port
        this.userRouter = userRouter;
        this.AdminRouter=AdminRouter
        this.connection=Connection
        this.initailizeMiddlewares()
        this.makeDbConnection()

    }


        // initialising middlewares 
    private initailizeMiddlewares():void{
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))

        this.app.use('/',this.AdminRouter.router)
        this.app.use('/users',[
            this.userRouter.router
        ]
        )

    }

    private makeDbConnection():void{
        // making db Connection here 
        this.connection.dbConnect()
    }

    public listen():void{
        this.app.listen(this.port,():void=>{
            console.log(`listening on Port ${this.port}`)
        })
    }

    


}

export default App