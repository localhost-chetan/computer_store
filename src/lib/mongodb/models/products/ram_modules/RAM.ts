import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type RAMType = CommonFields;

const RAMSchema = new Schema<RAMType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: [discountSchema],
    reviews: [reviewSchema],
  },
  { collection: "ram_modules" }
);

const RAM = models.RAM || model("RAM", RAMSchema);

export default RAM;
