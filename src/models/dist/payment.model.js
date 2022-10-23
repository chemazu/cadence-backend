"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var PaymentSchema = new mongoose_1["default"].Schema({
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    },
    platform: {
        type: String,
        required: [true, "A description of the transaction"]
    },
    transactionTime: {
        type: Date,
        "default": function () { return Date.now(); }
    },
    createdAt: {
        type: Date,
        "default": function () { return Date.now(); }
    },
    userId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "User"
    }
});
exports["default"] = mongoose_1["default"].model("Payment", PaymentSchema);
