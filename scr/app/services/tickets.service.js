
import {TicketSchema} from "../schema/tickets.schema.js"





export const createTickets = async (payload ) =>
{
    return await TicketSchema.create(payload);
};
export const getBooks = async (payload) =>
{
return await TicketSchema.get(payload);
};

