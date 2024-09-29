import Joi from "joi";

export const CreateTicketRequest = Joi.object({
   id: Joi.string().required(),
  seatNumber: Joi.number().required(),
  userid:Joi.string().required() ,
  price: Joi.number().required(),
  journeyId:Joi.string().required(),
  price:Joi.string().required()

});



    