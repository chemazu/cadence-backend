"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("./account/register");
const login_1 = require("./account/login");
const getUser_1 = require("./account/getUser");
const createOrder_1 = __importDefault(require("./order/createOrder"));
const root = {
    createUser: register_1.createUser,
    login: login_1.login,
    createOrder: createOrder_1.default,
    getUser: getUser_1.getUser,
};
exports.default = root;
//# sourceMappingURL=index.js.map