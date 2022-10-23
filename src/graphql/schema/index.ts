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
type OrderResponse{
    status:String!
 orderId:String
}
type PaymentResponse{
    status:String!
 paymentId:String
}

type Query {
    getUser(phone:String!): User!}

    type Mutation {
        createOrder(  userId:String  ,
            orderTotal : Int ,
            paymentId :String ,
            orderItems :[String]! ,) :OrderResponse
            createPayment(userId:String,amount:Int,platform:String):PaymentResponse
        createUser(firstname: String!,lastname: String!, email:String! password: String!, type: String!,): UserResponse
        login(email: String!, password: String!): UserResponse
    }
`);
export default schema;
