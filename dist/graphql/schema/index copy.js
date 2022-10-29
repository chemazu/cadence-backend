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
type OrderResponse{
    status:String!
 orderId:String
}
type OrderItems{
    // cardtype: String!;
    // category: String!;
    // img1: String!;
    // img2: String!;
    // name: String!;
    // price: Int!;
    // property: String!;
    // quantity: Int!;
    // year: Int!;
  }
type PaystackResponse {
    message: String;
    redirecturl: String;
    reference: String;
    status: String;
    trans: String;
    transaction: String;
    trxref: String;
  
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
            orderItems :[OrderItems]! ,) :OrderResponse
            createPayment(userId:String,amount:Int,paystackResponse:PaystackResponse):PaymentResponse
        createUser(firstname: String!,lastname: String!, email:String! password: String!, type: String!,): UserResponse
        login(email: String!, password: String!): UserResponse
    }
`);
exports.default = schema;
//# sourceMappingURL=index%20copy.js.map