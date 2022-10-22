"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const OrderSchema = new mongoose_2.Schema({
    userId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "User",
    },
    orderTotal: {
        type: Number,
        required: [true, "Amount is required"],
    },
    paymentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "Transaction",
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    orderItems: {
        type: (Array),
        required: [true, "Order Items is required"],
    },
    // orderItems {
    // orderTotal
    // orderBreaker
    // userId
});
exports.default = mongoose_1.default.model("Order", OrderSchema);
//# sourceMappingURL=order.model.js.map