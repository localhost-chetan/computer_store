import { Schema, model, models } from "mongoose";
import {
  type CommonFields,
  reviewSchema,
  discountSchema,
} from "../commonTypes";

type CabinetTypes = CommonFields & {
  color: string;
  brand: string;
  material: string;
  dimension: string;
  weight: string;
};

const cabinetSchema = new Schema<CabinetTypes>(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, requierd: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    material: { type: String, required: true },
    dimension: { type: String, required: true },
    weight: { type: String, required: true },
    imageURLs: { type: [String], default: [] },
    reviews: { type: [reviewSchema], default: [] },
    discount: { type: discountSchema, default: {} },
  },
  { collection: "cabinets" }
);

const Cabinet = models.Cabinet || model<CabinetTypes>("Cabinet", cabinetSchema);

export default Cabinet;
