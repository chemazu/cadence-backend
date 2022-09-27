import { buildSchema } from "graphql";

const schema = buildSchema(`
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
    login(email: String!, password: String!): UserResponse
}

    
    schema {
        query: Query
        mutation: Mutation
    }
    `);
export default schema;
