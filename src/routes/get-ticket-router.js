import { Router } from "express";
import { bookNewTicket } from "../app/controllers/tickets.controller.js";



const router = Router();

router.get("/getTicket", bookNewTicket);



export const getTicketRouter = router;