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
exports.createUser = void 0;
const user_1 = __importDefault(require("../../../models/user"));
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUser = (args) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(args);
    const schema = joi_1.default.object({
        firstname: joi_1.default.string().required(),
        email: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
        type: joi_1.default.string().required(),
        lastname: joi_1.default.string().required(),
    });
    const { error } = schema.validate(args);
    if (error) {
        throw new Error(error.details[0].message);
    }
    try {
        const { password, email } = args;
        const dbUser = yield user_1.default.findOne({ email: email });
        console.log(dbUser, "dbuser");
        if (dbUser) {
            throw new Error("User already exists");
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const encryptedUser = Object.assign(Object.assign({}, args), { password: hashedPassword });
        const newUser = new user_1.default(encryptedUser);
        const result = yield newUser.save();
        const token = jsonwebtoken_1.default.sign({ email: result.email, password: result.password }, process.env.REACT_APP_JWT_SECRET);
        return { user: result, token };
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.createUser = createUser;
//# sourceMappingURL=register.js.map