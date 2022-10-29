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
  orderItems: [
    {
      cardtype: String,
      category: String,
      img1: String,
      img2: String,
      name: String,
      price: Number,
      property: String,
      quantity: Number,
      year: Number,
    },
  ],
  // orderItems {

  // orderTotal
  // orderBreaker
  // userId
});

export default mongoose.model("Order", OrderSchema);
