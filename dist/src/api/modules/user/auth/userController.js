"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.getUserById = exports.registeruser = exports.getAllData = void 0;
const user_1 = __importDefault(require("../../../../../models/user"));
const getAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send('User Routes')
    try {
        const data = yield user_1.default.find();
        console.log(data);
        res.status(200).send({
            status: 200,
            message: 'All users',
            data
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getAllData = getAllData;
const registeruser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, rollNo, password } = req.body;
        const User = yield new user_1.default({ name, rollNo, password });
        // console.log(req.body)
        // users.push(req.body)
        yield User.save();
        res.status(200).send({
            status: 200,
            data: {
                name, rollNo, password
            },
            message: "User Registered  successfully"
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.registeruser = registeruser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userFind = yield user_1.default.findById(id);
        console.log(userFind);
        res.status(201).send({
            status: 200,
            data: {
                name: userFind === null || userFind === void 0 ? void 0 : userFind.name,
                rollNo: userFind === null || userFind === void 0 ? void 0 : userFind.rollNo,
                password: userFind === null || userFind === void 0 ? void 0 : userFind.password
            },
            message: "Single User Fetched Successfully"
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getUserById = getUserById;
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedUser = yield user_1.default.deleteOne({ _id: id });
        console.log(deletedUser);
        res.status(203).send({
            status: 203,
            message: "user deleted Successfully",
            data: deletedUser
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteUserById = deleteUserById;
