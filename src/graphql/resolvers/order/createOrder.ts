import Order from "../../../models/order.model";
import Joi from "joi";
const createUser = async (args: {
  userId: string;
  orderTotal: number;
  paymentId: string;
  orderItems: Array<string>;
}) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    orderTotal: Joi.number().required(),
    paymentId: Joi.string().required(),
    orderItems: Joi.array().items(Joi.string()).required(),
  });
  const { error } = schema.validate(args);
  if (error) {
    throw new Error(error.details[0].message);
  }
  try {
    const newOrder = await Order.create(args);
    console.log(newOrder, "cre");
    return {
      status: "success",
      orderId: newOrder._id,
    };
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

export default createUser;
