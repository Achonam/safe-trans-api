import { Router } from "express";
import { createNewTicket } from "../app/controllers/tickets.controller.js";




const router = Router();


router.post("/ticket", createNewTicket)



export const ticketRouter = router;