import { Schema } from "mongoose";



export const VehicleSchema = new Schema(
  {
    id: {
      type: Schema.Types.UUID,
      reqiured: true,
    },
    plateNumber: {
      type: String,
      required: true,
      unique: true,
    },
    model: {
      type: String,
      required: true,
      unique: false,
    },
    capacity: {
      type: Number,
      required: true,
      unique: false,
    },
    status: {
      type: String,
      enum: ["active", "in_maintenance", "retired"],
      required: true,
    },
    assignedDriverId: {
      type:Schema.Types.UUID,
      required: false,
    },
  },
  { timestamps: true }
);