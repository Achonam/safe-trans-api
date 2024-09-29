import { asyncHandler } from "../../lib/async.hanler.js";
import { BadRequestError, ValidationError } from "../../lib/error.def.js";
import { Validator } from "../../lib/validator.js";
import { CreateTicketRequest } from "../requesta/create.ticket.js";
import { bookTicket } from "../requesta/get-ticket-request.js";
import * as ticketService from "../services/tickets.service.js";
//import { Ticket } from "../schema/tickets.schema.js";


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
});

export const bookNewTicket = asyncHandler(async (req, res) =>
{ const {id} = req.params;

const { errors, value } = validator(bookTicket, req.body);
if (errors) 
    throw new BadRequestError (
"Your request can not be completed, try again", errors)

const Ticket = await ticketService.getTicket(id);
return res.json(
    {
        success:true,
        data: [
            "id", "userid", "journeyId", "seatNumber", "status", "price"
        ]
    }
);
    
    
})

    