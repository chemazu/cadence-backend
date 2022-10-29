import Joi from "joi";
import Order from "../../../models/order.model";

const createOrder = async (args: {
  userId: string;
  orderTotal: number;
  paymentId: string;
  orderItems: [
    {
      cardtype: string;
      category: string;
      img1: string;
      img2: string;
      name: string;
      price: number;
      property: string;
      quantity: number;
      year: number;
    }
  ];
}) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    orderTotal: Joi.number().required(),
    paymentId: Joi.string().required(),
    orderItems: Joi.array()
      .items(
        Joi.object({
          cardtype: Joi.string(),
          category: Joi.string(),
          img1: Joi.string(),
          img2: Joi.string(),
          name: Joi.string(),
          price: Joi.number().required(),
          property: Joi.string(),
          quantity: Joi.number().required(),
          year: Joi.number().required(),
        })
      )
      .required(),
  });
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
    // throw new Error(error.details[0].message);
    console.log(error)
  }
  // return {
  //   status: "String",
  //   orderId: "String",
  // };
};
export default createOrder;
