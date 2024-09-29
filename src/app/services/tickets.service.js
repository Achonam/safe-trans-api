
import {Ticket, } from "../schema/tickets.schema.js"





export const createTickets = async (payload ) =>
{
    return await Ticket.create(payload);
};
export const getTicket = async (payload) =>
{
return await Ticket.get(payload);
};

