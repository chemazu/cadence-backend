import { buildSchema } from "graphql";

const schema = buildSchema(`
type User {
    id: ID!
    name: String!
    phone: String!
    email: String!
    password: String!
    type: String!
    balance: Int!
    currency: String!
    createdAt: String!
}

type UserResponse {
    user: User
    token: String
}
type Transaction {
    id: ID!
    phone: String!
    amount: Int!
    narration: String!
    accountType: String!
    transactionType: String!
    userId: String!
    currency: String!
    channel: String!
    balanceAfter: Int!
    createdAt: String!
}

type Query {
    users: [User!]!
    login(phone: String!, password: String!): String!
}

type Mutation {
    createUser(name: String!, phone: String!, email:String! password: String!, type: String!,): UserResponse!}
    createTransaction(phone: String!, amount: Int!, narration: String!, accountType: String!, transactionType: String!,): Transaction!}
    schema {
        query: Query
        mutation: Mutation
    }
    `);
export default schema;
