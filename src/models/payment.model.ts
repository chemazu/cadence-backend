import mongoose from "mongoose";
import { Schema } from "mongoose";

const PaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  platform: {
    type: String,
    required: [true, "A description of the transaction"],
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
});
export default mongoose.model("Payment", PaymentSchema);
