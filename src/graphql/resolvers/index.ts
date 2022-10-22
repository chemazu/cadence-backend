import User from "../../models/user";
import { createUser } from "./account/register";
import { login } from "./account/login";
import { getUser } from "./account/getUser";
import createOrder from "./order/createOrder";

const root = {
  createUser,
  login,
  createOrder,
  getUser,
};

export default root;
