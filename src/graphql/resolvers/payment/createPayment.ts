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
    paystackResponse: Joi.object({
      message: Joi.string().required(),
      redirecturl: Joi.string().required(),
      reference: Joi.string().required(),
      status: Joi.string().required(),
      trans: Joi.string().required(),
      transaction: Joi.string().required(),
      trxref: Joi.string().required(),
    }),
  });
  console.log(args);

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
