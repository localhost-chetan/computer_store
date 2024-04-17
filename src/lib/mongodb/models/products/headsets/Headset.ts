import { Schema, models, model } from "mongoose";
import {
  type CommonFields,
  reviewSchema,
  discountSchema,
} from "../commonTypes";

type HeadsetType = CommonFields & {
  brand: string;
  connectivity: string;
  wireless_technology: string;
  compatibility: string;
  microphone: boolean;
  noise_cancellation: boolean;
  color: string;
  rating: number;
};

const headsetSchema = new Schema<HeadsetType>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    connectivity: { type: String },
    wireless_technology: { type: String },
    compatibility: { type: String },
    microphone: { type: Boolean },
    noise_cancellation: { type: Boolean },
    color: { type: String },
    rating: { type: Number },
    imageURLs: { type: [String], default: [] },
    reviews: { type: [reviewSchema], default: [] },
    discount: { type: discountSchema, default: {} },
  },
  { collection: "headsets" }
);

const Headset = models.Headset || model<HeadsetType>("Headset", headsetSchema);

export default Headset;
