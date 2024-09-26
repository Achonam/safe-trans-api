import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import { createServer } from "http";
//import listRoutes from "express-list-routes";
import morgan from "morgan";
import { authRouter } from "../routes/auth-router.js";
import { NotFoundError } from "../lib/error.def.js";
import {errorMiddleware} from "../app/middleware/error.mid.js"
import { ticketRouter } from "../routes/ticket.router.js";




const app = express();
const server = createServer(app);



app.use(cors());
app.use(helmet());
app.use(morgan(" dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression);



app.get("/health", (req, res) => {
  return res.json({ success: true, message: "Server is running" });
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/ticket", ticketRouter);

app.use("*", (req, res) => {
  throw new NotFoundError(
    `The requested route ${req.originalUrl} does not exist on this server`
  );
});

app.use(errorMiddleware);


export {server, app}