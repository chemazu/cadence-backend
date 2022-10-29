import Payment from "../../../models/payment.model";
import Joi from "joi";
const createPayment = async (args: {
  userId: string;
  amount: number;
  paystackResponse: {
    message: string;
    redirecturl: string;
    reference: string;
    status: string;
    trans: string;
    transaction: string;
    trxref: string;
  };
}) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    amount: Joi.number().required(),

  });
  const { error } = schema.validate(args);
  if (error) {
    throw new Error(error.details[0].message);
  }
  try {
    const newPayment = await Payment.create(args);
    return {
      status: "success",
      paymentId: newPayment._id,
    };
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

export default createPayment;
