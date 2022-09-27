// import Joi from "joi";
// import Transaction from "../../../models/transaction";
// import User from "../../../models/user";
// export const createTransaction = async (args: {
//   phone: string;
//   amount: number;
//   narration: string;
//   accountType: string;
//   transactionType: string;
 
// }) => {
//   console.log(args)
//   const schema = Joi.object({
//     phone: Joi.string().required(),
//     amount: Joi.number().required(),
//     narration: Joi.string().required(),
//     transactionType: Joi.string().required(),
//   });
//   const { error } = schema.validate(args);
//   if (error) {
//     throw new Error(error.details[0].message);
//   }
//   try {
//     const { phone, amount, narration, transactionType } = args;
//     let balanceAfter = 0;
//     // Find user
//     const user = await User.findOne({ phone: phone });
//     if (!user) {
//       throw new Error("User does not exist");
//     }
//     if (amount < 100) {
//       throw new Error("Minimum amount is NGN100");
//     }

//     // if (transactionType.toUpperCase() === "CREDIT") {
//     //   user.balance += amount;
//     //   balanceAfter = user.balance;
//     // } else {
//     //   if (user.balance < amount) {
//     //     throw new Error("Insufficient balance");
//     //   }
//     //   user.balance -= amount;
//     //   balanceAfter = user.balance;
//     // }
//     const updatedTransaction = {
//       ...args,
//       balanceAfter,
//       userId: user._id,
//     };
//     const transaction = await Transaction.create(updatedTransaction);
//     await User.findByIdAndUpdate(user._id, { balance: balanceAfter });
//     return transaction;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
