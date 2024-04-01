import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type GPUType = CommonFields;

const GPUSchema = new Schema<GPUType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: [discountSchema],
    reviews: [reviewSchema],
  },
  { collection: "graphics_cards" }
);

const GPU = models.GPU || model("GPU", GPUSchema);

export default GPU;
