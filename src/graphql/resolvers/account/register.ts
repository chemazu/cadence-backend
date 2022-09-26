import User from "../../../models/user";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const createUser = async (args: {
  name: string;
  phone: string;
  password: string;
  type: string;
  email: string;
}) => {
  console.log(args);
  const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string().required(),
    email: Joi.string().required(),
  });
  const { error } = schema.validate(args);
  if (error) {
    throw new Error(error.details[0].message);
  }
  try {
    const { password, phone } = args;
    const dbUser = await User.findOne({ phone: phone });
    console.log(dbUser, "dbuser");
    if (dbUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const encryptedUser = { ...args, password: hashedPassword };
    const newUser = new User(encryptedUser);
    const result = await newUser.save();
    const token = jwt.sign(
      { phone: result.phone, password: result.password },
      process.env.REACT_APP_JWT_SECRET
    );
    return { user: result, token };
  } catch (error) {
    throw new Error(error.message);
  }
  // return {
  //   user: {
  //     ...args,
  //     balance: 0,
  //     currency: "",
  //     createdAt: "",
  //   },
  //   token: "r",
  // };
};
//   {

// console.log(args)

//   try {
//     const { password,phone } = args;
//     const dbUser = await User.findOne({ phone: phone });
//     console.log(dbUser ,"dbuser")
//     if (dbUser) {
//         throw new Error("User already exists");
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const encryptedUser = { ...args, password: hashedPassword };
//     const newUser = new User(encryptedUser);
//     const result = await newUser.save();
//     const token = jwt.sign(
//       { phone: result.phone, password: result.password },
//       process.env.REACT_APP_JWT_SECRET
//     )
//     return {user:result,token}
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
