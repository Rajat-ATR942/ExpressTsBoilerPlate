"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./api/modules/user/userRoute"));
const adminRoutes_1 = __importDefault(require("./api/modules/admin/adminRoutes"));
// import db connection
const Connection = __importStar(require("../helper/db.helper"));
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.userRouter = userRoute_1.default;
        this.AdminRouter = adminRoutes_1.default;
        this.connection = Connection;
        this.initailizeMiddlewares();
        this.makeDbConnection();
    }
    // initialising middlewares 
    initailizeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use('/', this.AdminRouter.router);
        this.app.use('/users', [
            this.userRouter.router
        ]);
    }
    makeDbConnection() {
        // making db Connection here 
        this.connection.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`listening on Port ${this.port}`);
        });
    }
}
exports.default = App;
