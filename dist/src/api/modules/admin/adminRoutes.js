"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import * as Controller from '../admin'
class AdminRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.basePath = '/admin';
        this.initialiseRoutes();
    }
    initialiseRoutes() {
        this.router
            .get(`${this.basePath}`, (req, res) => {
            res.send('Admin ');
            console.log('Admin loggedin');
        })
            .post(`${this.basePath}/login`, (req, res) => {
            const { name, email, password } = req.body;
            res.status(200).send({
                status: 200,
                data: { name, email, password },
                message: 'Admin Logged in Successfully'
            });
        });
    }
}
exports.default = new AdminRouter();
