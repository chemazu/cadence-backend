"use strict";
exports.__esModule = true;
// import jwt from "jsonwebtoken";
var register_1 = require("./account/register");
var login_1 = require("./account/login");
var createTransaction_1 = require("./transaction/createTransaction");
var getUser_1 = require("./account/getUser");
var getTransactions_1 = require("./transaction/getTransactions");
var root = {
    createUser: register_1.createUser,
    login: login_1.login,
    createTransaction: createTransaction_1.createTransaction,
    getUser: getUser_1.getUser,
    getTransactions: getTransactions_1.getTransactions
};
exports["default"] = root;
