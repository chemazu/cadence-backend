"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var schema = graphql_1.buildSchema("\ntype User {\n    id: ID!\n    firstname: String!\n    lastname: String!\n    email: String!\n    password: String!\n    type: String!\n    createdAt: String!\n}\ntype UserResponse {\n    user: User!\n    token: String\n}\ntype OrderResponse{\n    status:String!\n orderId:String\n}\n\ntype Query {\n    getUser(phone:String!): User!}\n\n    type Mutation {\n        createOrder(  userId:String  ,\n            orderTotal : Int ,\n            paymentId :String ,\n            orderItems :[String]! ,) :OrderResponse\n        createUser(firstname: String!,lastname: String!, email:String! password: String!, type: String!,): UserResponse\n        login(email: String!, password: String!): UserResponse\n    }\n");
exports["default"] = schema;
