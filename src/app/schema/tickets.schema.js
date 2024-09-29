//import { required } from "joi";
import { model, Schema } from "mongoose";





export const Ticket = new Schema(
  {
    id: {
      type: Schema.Types.UUID,
      required: true,
    },
    userid: {
      type: Schema.Types.UUID,
      reuquired: true,
    },
    journeyId: {
      type: Schema.Types.UUID,
      required: true,
    },
    seatNumber: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["booked", "cancelled"],
      required: true,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);
// export const Ticket = model("ticket", "TicketSchema");