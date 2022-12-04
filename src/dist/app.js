"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
var express_graphql_1 = require("express-graphql");
var index_1 = require("./graphql/resolvers/index");
var index_2 = require("./graphql/schema/index");
var port = process.env.PORT || 8000;
var app = express_1["default"]();
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.use(cors_1["default"]());
app.use(express_1["default"].json());
dotenv_1.config();
app.use("/graphql", express_graphql_1.graphqlHTTP({
    schema: index_2["default"],
    rootValue: index_1["default"],
    graphiql: true
}));
mongoose_1["default"].connect(process.env.MONGO_URI);
var db = mongoose_1["default"].connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
// d
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:" + port);
});
