import User from "../../../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (args: { email: string; password: string }) => {
  // console.log(args)
  const { password, email } = args;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid Credentials");
  }
  // const isPasswordValid = await bcrypt.compare(password, user.password);
  // console.log(isPasswordValid, user);
    const pass = await bcrypt.compare(password, user.password);
    if (pass && user) {
      const token = jwt.sign(
        { email: user.email, password: user.password },
        process.env.REACT_APP_JWT_SECRET
      );

  return { user, token };
    }
  throw new Error("Invalid Credentials");
};
