import Order from "../../../models/order.model";
import Joi from "joi";
const createOrder = async (args: {
  userId: string;
  orderTotal: number;
  paymentId: string;
  orderItems: Array<{
    cardtype: string;
    category: string;
    img1: string;
    img2: string;
    name: string;
    price: number;
    property: string;
    quantity: number;
    year: number;
  }>;
}) => 
{
  const schema = Joi.object({
    userId: Joi.string().required(),
    orderTotal: Joi.number().required(),
    paymentId: Joi.string().required(),
    // orderItems: Joi.array().items(Joi.string()).required(),
  });
  console.log(args)
  const { error } = schema.validate(args);
  if (error) {
    throw new Error(error.details[0].message);
  }
  try {
    const newOrder = await Order.create(args);
    return {
      status: "success",
      orderId: newOrder._id,
    };
  } catch (error) {
    console.log(error)
  }
};

export default createOrder;
