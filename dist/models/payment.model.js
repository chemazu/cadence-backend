"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const PaymentSchema = new mongoose_1.default.Schema({
    amount: {
        type: Number,
        required: [true, "Amount is required"],
    },
    transactionTime: {
        type: Date,
        default: () => Date.now(),
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    userId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "User",
    },
    paystackResponse: {
        message: String,
        redirecturl: String,
        reference: String,
        status: String,
        trans: String,
        transaction: String,
        trxref: String,
    }
});
exports.default = mongoose_1.default.model("Payment", PaymentSchema);
//# sourceMappingURL=payment.model.js.map