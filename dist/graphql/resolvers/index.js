"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import jwt from "jsonwebtoken";
const register_1 = require("./account/register");
const login_1 = require("./account/login");
// import { createTransaction } from "./transaction/createTransaction";
const getUser_1 = require("./account/getUser");
const getTransactions_1 = require("./transaction/getTransactions");
const root = {
    createUser: register_1.createUser,
    login: login_1.login,
    // createTransaction,
    getUser: getUser_1.getUser,
    getTransactions: getTransactions_1.getTransactions,
};
exports.default = root;
//# sourceMappingURL=index.js.map