import Joi from "joi";

export const CreateTicketRequest = Joi.object({
  
  seatNumber: Joi.number().required(),
  
  price: Joi.number().required()

});
    