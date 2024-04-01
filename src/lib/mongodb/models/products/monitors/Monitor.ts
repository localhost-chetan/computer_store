import { Schema, model, models } from "mongoose";
import {
  type CommonFields,
  reviewSchema,
  discountSchema,
} from "../commonTypes";

type MonitorTypes = CommonFields & {
  resolution: string;
  panelType: string;
  refreshRate: number;
  responseTime: number;
  aspectRatio: string;
  curvature: string;
  brand: string;
};

const monitorSchema = new Schema<MonitorTypes>(
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
    resolution: { type: String, required: true },
    panelType: { type: String, required: true },
    refreshRate: { type: Number, required: true },
    responseTime: { type: Number, required: true },
    aspectRatio: { type: String, required: true },
    curvature: { type: String, required: true },
    brand: { type: String, required: true },
  },
  { collection: "monitors" }
);

const Monitor = models.Monitor || model<MonitorTypes>("Monitor", monitorSchema);

export default Monitor;
