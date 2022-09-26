import User from "../../models/user";
// import jwt from "jsonwebtoken";
import { createUser } from "./account/register";
import { login } from "./account/login";
import { createTransaction } from "./transaction/createTransaction";
import { getUser } from "./account/getUser";
import { getTransactions } from "./transaction/getTransactions";

const root = {
  createUser,
  login,
  createTransaction,
  getUser,
  getTransactions,
};

export default root;
