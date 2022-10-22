import mongoose from "mongoose";
import { Schema } from "mongoose";

const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  orderTotal: {
    type: Number,
    required: [true, "Amount is required"],
  },
  paymentId: {
    type: Schema.Types.ObjectId,
    ref: "Transaction",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  orderItems: {
    type: Array<string>,
    required: [true, "Order Items is required"],
  },
  // orderItems {

  // orderTotal
  // orderBreaker
  // userId
});

export default mongoose.model("Order", OrderSchema);
