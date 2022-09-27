import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Name is required"],
    },
    lastname: {
        type: String,
        required: [true, "Name is required"],
    },
    phone :{
        type: String,
        required: [true, "Phone is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    type:{
        type: String,
        required: [true, "account type is required"],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
      },
})

export default mongoose.model("User", UserSchema);