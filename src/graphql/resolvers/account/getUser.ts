import User from "../../../models/user";

export const getUser = async (args: { phone: string }) => {
    console.log(args)
  const { phone } = args;
  const user = await User.find({ phone });
  if (!user) {
    throw new Error("Invalid Credentials");
  }
  return user[0];
};
