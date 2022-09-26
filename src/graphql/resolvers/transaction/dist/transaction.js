"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.createTransaction = void 0;
var joi_1 = require("joi");
var transaction_1 = require("../../../models/transaction");
var user_1 = require("../../../models/user");
exports.createTransaction = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var schema, error, phone, amount, narration, transactionType, balanceAfter, user, updatedTransaction, transaction, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(args);
                schema = joi_1["default"].object({
                    phone: joi_1["default"].string().required(),
                    amount: joi_1["default"].number().required(),
                    narration: joi_1["default"].string().required(),
                    transactionType: joi_1["default"].string().required()
                });
                error = schema.validate(args).error;
                if (error) {
                    throw new Error(error.details[0].message);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                phone = args.phone, amount = args.amount, narration = args.narration, transactionType = args.transactionType;
                balanceAfter = 0;
                return [4 /*yield*/, user_1["default"].findOne({ phone: phone })];
            case 2:
                user = _a.sent();
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
                updatedTransaction = __assign(__assign({}, args), { balanceAfter: balanceAfter, userId: user._id });
                return [4 /*yield*/, transaction_1["default"].create(updatedTransaction)];
            case 3:
                transaction = _a.sent();
                return [4 /*yield*/, user_1["default"].findByIdAndUpdate(user._id, { balance: balanceAfter })];
            case 4:
                _a.sent();
                return [2 /*return*/, transaction];
            case 5:
                error_1 = _a.sent();
                throw new Error(error_1.message);
            case 6: return [2 /*return*/];
        }
    });
}); };