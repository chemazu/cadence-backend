"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`
type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    type: String!
    createdAt: String!
}

type UserResponse {
    user: User!
    token: String
}
type LoginResponse {
    user: User!
    token: String
}
type Transaction {
    id: ID!
    phone: String!
    amount: Int!
    narration: String!
 
    transactionType: String!
    userId: String!
  
    
    balanceAfter: Int!
    createdAt: String!
}

type Query {
    getUser(phone:String!): User!
    getTransactions(phone:String!): [Transaction!]!}

type Mutation {
    createTransaction(phone: String!, amount: Int!, narration: String!, transactionType: String!,): Transaction!
    createUser(firstname: String!,lastname: String!, email:String! password: String!, type: String!,): UserResponse
    login(phone: String!, password: String!): LoginResponse
}

    
    schema {
        query: Query
        mutation: Mutation
    }
    `);
exports.default = schema;
//# sourceMappingURL=index.js.map