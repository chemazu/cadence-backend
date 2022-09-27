"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    firstname: {
        type: String,
        required: [true, "Name is required"]
    },
    lastname: {
        type: String,
        required: [true, "Name is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    type: {
        type: String,
        required: [true, "account type is required"]
    },
    createdAt: {
        type: Date,
        "default": function () { return Date.now(); }
    }
});
exports["default"] = mongoose_1["default"].model("User", UserSchema);
