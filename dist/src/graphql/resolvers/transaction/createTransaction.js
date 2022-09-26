"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransaction = void 0;
const joi_1 = __importDefault(require("joi"));
const transaction_1 = __importDefault(require("../../../models/transaction"));
const user_1 = __importDefault(require("../../../models/user"));
const createTransaction = (args) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(args);
    const schema = joi_1.default.object({
        phone: joi_1.default.string().required(),
        amount: joi_1.default.number().required(),
        narration: joi_1.default.string().required(),
        transactionType: joi_1.default.string().required(),
    });
    const { error } = schema.validate(args);
    if (error) {
        throw new Error(error.details[0].message);
    }
    try {
        const { phone, amount, narration, transactionType } = args;
        let balanceAfter = 0;
        // Find user
        const user = yield user_1.default.findOne({ phone: phone });
        if (!user) {
            throw new Error("User does not exist");
        }
        if (amount < 100) {
            throw new Error("Minimum amount is NGN100");
        }
        if (transactionType.toUpperCase() === "CREDIT") {
            user.balance += amount;
            balanceAfter = user.balance;
        }
        else {
            if (user.balance < amount) {
                throw new Error("Insufficient balance");
            }
            user.balance -= amount;
            balanceAfter = user.balance;
        }
        const updatedTransaction = Object.assign(Object.assign({}, args), { balanceAfter, userId: user._id });
        const transaction = yield transaction_1.default.create(updatedTransaction);
        yield user_1.default.findByIdAndUpdate(user._id, { balance: balanceAfter });
        return transaction;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.createTransaction = createTransaction;
//# sourceMappingURL=createTransaction.js.map