"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var OrderSchema = new mongoose_2.Schema({
    userId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "User"
    },
    orderTotal: {
        type: Number,
        required: [true, "Amount is required"]
    },
    paymentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "Transaction"
    },
    createdAt: {
        type: Date,
        "default": function () { return Date.now(); }
    },
    updatedAt: {
        type: Date,
        "default": function () { return Date.now(); }
    },
    orderItems: [
        {
            cardtype: String,
            category: String,
            img1: String,
            img2: String,
            name: String,
            price: Number,
            property: String,
            quantity: Number,
            year: Number
        },
    ]
});
exports["default"] = mongoose_1["default"].model("Order", OrderSchema);
