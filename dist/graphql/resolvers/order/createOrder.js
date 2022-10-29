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
const joi_1 = __importDefault(require("joi"));
const order_model_1 = __importDefault(require("../../../models/order.model"));
const createOrder = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        userId: joi_1.default.string().required(),
        orderTotal: joi_1.default.number().required(),
        paymentId: joi_1.default.string().required(),
        orderItems: joi_1.default.array()
            .items(joi_1.default.object({
            cardtype: joi_1.default.string(),
            category: joi_1.default.string(),
            img1: joi_1.default.string(),
            img2: joi_1.default.string(),
            name: joi_1.default.string(),
            price: joi_1.default.number().required(),
            property: joi_1.default.string(),
            quantity: joi_1.default.number().required(),
            year: joi_1.default.number().required(),
        }))
            .required(),
    });
    console.log(args);
    const { error } = schema.validate(args);
    if (error) {
        throw new Error(error.details[0].message);
    }
    try {
        const newOrder = yield order_model_1.default.create(args);
        return {
            status: "success",
            orderId: newOrder._id,
        };
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = createOrder;
//# sourceMappingURL=createOrder.js.map