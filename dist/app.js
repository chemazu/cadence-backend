"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const express_graphql_1 = require("express-graphql");
const index_1 = __importDefault(require("./graphql/resolvers/index"));
const index_2 = __importDefault(require("./graphql/schema/index"));
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, dotenv_1.config)();
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: index_2.default,
    rootValue: index_1.default,
    graphiql: true,
}));
mongoose_1.default.connect(process.env.MONGO_URI);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map