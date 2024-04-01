import { Schema, model, models } from "mongoose";
import {
  type CommonFields,
  reviewSchema,
  discountSchema,
} from "../commonTypes";

type MotherboardTypes = CommonFields & {
  socketType: string;
  formFactor: string;
  chipset: string;
  manufaturer: string;
  itemWeight: number;
  memoryClockSpeedMHz: number;
  memoryTechnology: string;
  numberOfUSB2Ports: number;
  numberOfUSB3Ports: number;
};

const motherboardSchema = new Schema<MotherboardTypes>(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, requierd: true },
    imageURLs: { type: [String], default: [] },
    reviews: { type: [reviewSchema], default: [] },
    discount: { type: [discountSchema], default: {} },
    socketType: { type: String, required: true },
    formFactor: { type: String, required: true },
    chipset: { type: String, required: true },
    manufaturer: { type: String, required: true },
    itemWeight: { type: Number, required: true },
    memoryClockSpeedMHz: { type: Number, required: true },
    memoryTechnology: { type: String, required: true },
    numberOfUSB2Ports: { type: Number, required: true },
    numberOfUSB3Ports: { type: Number, required: true },
  },
  { collection: "motherboards" }
);

const Motherboard =
  models.Motherboard ||
  model<MotherboardTypes>("Motherboard", motherboardSchema);

export default Motherboard;
