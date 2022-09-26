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
exports.login = void 0;
const user_1 = __importDefault(require("../../../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = (args) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(args)
    const { password, phone } = args;
    const user = yield user_1.default.findOne({ phone: phone });
    if (!user) {
        throw new Error("Invalid Credentials");
    }
    const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
    console.log(isPasswordValid, user);
    const pass = yield bcrypt_1.default.compare(password, user.password);
    if (pass && user) {
        const token = jsonwebtoken_1.default.sign({ phone: user.phone, password: user.password }, process.env.REACT_APP_JWT_SECRET);
        return { user, token };
    }
    throw new Error("Invalid Credentials");
});
exports.login = login;
//# sourceMappingURL=login.js.map