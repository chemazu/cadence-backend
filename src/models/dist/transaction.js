"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var TransactionSchema = new mongoose_1["default"].Schema({
    phone: {
        type: String,
        required: [true, "Account number is required"]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    },
    narration: {
        type: String,
        required: [true, "A description of the transaction"]
    },
    transactionTime: {
        type: Date,
        "default": function () { return Date.now(); }
    },
    transactionType: {
        type: String,
        required: [true, "Transaction type is required"]
    },
    balanceAfter: {
        type: Number
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
// accountNumber	string	Required The customer’s bank account number `
// amount	number	Required Transaction amount
// currency	string	Required A 3 character code that represents the currency
// channel	string	Optional Channel from which the transaction was done such as ATM, POS, Mobile, USSD
// narration	string	Required A description of the transaction
// referenceId	string	Required A unique internal reference to the specific transaction
// transactionTime	datetime	Required The time on which the transaction was done on the system in the format DDMMYYYY hh:mm:ss
// transactionType	string	Required The type of transaction
// valueDate	datetime	Required The value date for transaction on the system in the format DDMMYYYY
// balanceAfter	number	Optional The balance of the account after the transaction was approved or authorized
exports["default"] = mongoose_1["default"].model("Transaction", TransactionSchema);
