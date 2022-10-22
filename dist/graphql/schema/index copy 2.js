"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`
type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    type: String!
    createdAt: String!
}
type UserResponse {
    user: User!
    token: String
}
type Query {
    getUser(phone:String!): User!}
type Mutation {
    createOrder()
    createUser(firstname: String!,lastname: String!, email:String! password: String!, type: String!,): UserResponse
    login(email: String!, password: String!): UserResponse
}
    schema {
        query: Query
        mutation: Mutation
    }
    `);
exports.default = schema;
//# sourceMappingURL=index%20copy%202.js.map