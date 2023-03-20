import { Router } from "express";

export interface Route{
    router:Router
    baseUrl:string;
}


export interface User {
    name:string;
    password:string;
    rollNo?:number
}