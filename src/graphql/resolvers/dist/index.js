"use strict";
exports.__esModule = true;
var register_1 = require("./account/register");
var login_1 = require("./account/login");
var getUser_1 = require("./account/getUser");
var createOrder_1 = require("./order/createOrder");
var createPayment_1 = require("./payment/createPayment");
var root = {
    createUser: register_1.createUser,
    createPayment: createPayment_1["default"],
    login: login_1.login,
    createOrder: createOrder_1["default"],
    getUser: getUser_1.getUser
};
exports["default"] = root;
