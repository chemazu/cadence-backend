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
type OrderResponse {
    status :String,
    orderId:String
}
input OrderItems {
    cardtype: String!
    category: String!
    img1: String!
    img2: String!
    name: String!
    price: Int!
    property: String!
    quantity: Int!
    year: Int!
  }

type PaymentResponse{
    status:String!
 paymentId:String
}
type Query {
    getUser(phone:String!): User!}

    type Mutation{
        createOrder(userId:String ,orderTotal : Int ,paymentId :String , orderItems:[OrderItems]) :OrderResponse
        createUser(firstname: String!,lastname: String!, email:String! password: String!, type: String!,): UserResponse
        login(email: String!, password: String!): UserResponse
    }
`);
export default schema;
