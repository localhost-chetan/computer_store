import { Schema, model, models } from "mongoose";
import {
  type CommonFields,
  reviewSchema,
  discountSchema,
} from "../commonTypes";

type MouseTypes = CommonFields & {
  type: string;
  connectivity: string;
  dpi: number;
  buttons: number;
  handOrientation: string;
  sensorType: string;
  brand: string;
};

const mouseSchema = new Schema<MouseTypes>(
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
    type: { type: String, required: true },
    brand: { type: String, required: true },
    dpi: { type: Number, required: true },
    buttons: { type: Number, required: true },
    handOrientation: { type: String, required: true },
    sensorType: { type: String, required: true },
    connectivity: { type: String, required: true },
  },
  { collection: "mouse" }
);

const Mouse = models.Mouse || model<MouseTypes>("Mouse", mouseSchema);

export default Mouse;
