import Transaction from "../../../models/transaction";

export const getTransactions = async (args: { phone: string }) => {
  const { phone } = args;
  const transaction = await Transaction.find({ phone });
  if (!Transaction) {
    throw new Error("Invalid Credentials");
  }
  return transaction;
};
