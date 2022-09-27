"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstname: {
        type: String,
        required: [true, "Name is required"],
    },
    lastname: {
        type: String,
        required: [true, "Name is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    type: {
        type: String,
        required: [true, "account type is required"],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});
exports.default = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=user.js.map