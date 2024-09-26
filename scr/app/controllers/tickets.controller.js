import { asyncHandler } from "../../lib/async.hanler.js";
import { ValidationError } from "../../lib/error.def.js";
import { Validator } from "../../lib/validator.js";
import { CreateTicketRequest } from "../requesta/create.ticket.js";
import * as ticketService from "../services/tickets.service.js"



export const createNewTicket = asyncHandler(async (req, res) =>
{
    const validator = new Validator();
    const {errors, value} = validator.validate(CreateTicketRequest, req.body);
   
    if (error) throw new ValidationError("task failed", errors);
    const ticket = await ticketService.createTickets(value);
   return res.status(201).json({
    succes: true,
    message: "New ticket has been created",
    data: [
        "id", "userid", "journeyId", "seatNumber", "status", "price"
    ]
   }) 
})