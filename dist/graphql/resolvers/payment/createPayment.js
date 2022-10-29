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
const payment_model_1 = __importDefault(require("../../../models/payment.model"));
const joi_1 = __importDefault(require("joi"));
const createPayment = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        userId: joi_1.default.string().required(),
        amount: joi_1.default.number().required(),
        paystackResponse: joi_1.default.object({
            message: joi_1.default.string().required(),
            redirecturl: joi_1.default.string().required(),
            reference: joi_1.default.string().required(),
            status: joi_1.default.string().required(),
            trans: joi_1.default.string().required(),
            transaction: joi_1.default.string().required(),
            trxref: joi_1.default.string().required(),
        }),
    });
    const { error } = schema.validate(args);
    if (error) {
        throw new Error(error.details[0].message);
    }
    try {
        const newPayment = yield payment_model_1.default.create(args);
        return {
            status: "success",
            paymentId: newPayment._id,
        };
    }
    catch (error) {
        throw new Error(error.details[0].message);
    }
});
exports.default = createPayment;
//# sourceMappingURL=createPayment.js.map