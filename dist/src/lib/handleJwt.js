"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateAccessToken(username) {
    return jsonwebtoken_1.default.sign({ username }, process.env.REACT_APP_JWT_SECRET, {
        expiresIn: "60d",
    });
}
exports.default = generateAccessToken;
//# sourceMappingURL=handleJwt.js.map