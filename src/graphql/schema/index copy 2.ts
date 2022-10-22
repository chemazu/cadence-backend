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
export default schema;
