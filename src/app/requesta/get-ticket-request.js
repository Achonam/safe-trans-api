import Joi from "joi";



export const bookTicket = Joi.object({
  id: Joi.required(),
  seatNumber: Joi.number().required(),
  userid: Joi.string().required(),
  price: Joi.number().required(),
  journeyId: Joi.string().required(),
  price: Joi.string().required(),
});