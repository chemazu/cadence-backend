import mongoose from "mongoose";
import { Schema } from "mongoose";

const PaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  transactionTime: {
    type: Date,
    default: () => Date.now(),
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  paystackResposne:{
    message: String,
    redirecturl: String,
    reference: String,
    status: String,
    trans: String,
    transaction: String,
    trxref: String,
  }
});
export default mongoose.model("Payment", PaymentSchema);
