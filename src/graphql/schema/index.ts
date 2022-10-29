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
    price: Float!
    property: String!
    quantity: Float!
    year: Float!
  }
input PaystackResponse {
    message: String!
    redirecturl: String!
    reference: String!
    status: String!
    trans: String!
    transaction: String!
    trxref: String!
}
type PaymentResponse{
    status:String!
    paymentId:String
}
type Query {
    getUser(phone:String!): User!}

    type Mutation{
        createPayment(userId:String,amount:Float,paystackResponse:PaystackResponse):PaymentResponse
        createOrder(userId:String ,orderTotal : Float ,paymentId :String , orderItems:[OrderItems]) :OrderResponse
        createUser(firstname: String!,lastname: String!, email:String! password: String!, type: String!,): UserResponse
        login(email: String!, password: String!): UserResponse
    }
`);
export default schema;
