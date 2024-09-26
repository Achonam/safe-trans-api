import { required } from "joi";
import { Schema } from "mongoose";


export const ReportSchema = new Schema(
  {
    id: {
      type: Schema.Types.UUID,

      format: autogenerate,
    },
    journeyId: {
      type: Schema.Types.UUID,

      required: true,
    },
    driverId: {
      type: Schema.Types.UUID,
      required: true,
    },
    passengerFeedback: {
      type: String,
      required: false,
    },
    issuesReported: {
      type: String,
      required: true,
    },
    journeyDuration: {
      type: Number,
      required: false,
    },
    fuelConsumption: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);