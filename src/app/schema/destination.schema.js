import { Schema } from "mongoose";



export const DestinationSchema = new Schema(
  {
    id: {
      type: Schema.Types.UUID,

      //format: auto - generated,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    baseFare: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const JourneySchema = new Schema(
  {
    id: {
      type: Schema.Types.UUID,
      //format: auto_generated,
    },
    vehicleId: {
      type: Schema.Types.UUID,

      required: true,
    },
    destinationId: {
      type: String,
      required: true,
    },
    departureTime: {
      type: DateTime,
      required: true,
    },
    availableSeats: {
      type: Number,
      //format: auto-calculated,
    },
  },
  { timestamps: true }
);