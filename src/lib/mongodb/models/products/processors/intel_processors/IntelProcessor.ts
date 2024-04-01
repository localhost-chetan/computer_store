import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../../commonTypes";

type IntelProcessorType = CommonFields;

const intelProcessorSchema = new Schema<IntelProcessorType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: [discountSchema],
    reviews: [reviewSchema],
  },
  { collection: "intel_processors" }
);

const IntelProcessor =
  models.IntelProcessor || model("IntelProcessor", intelProcessorSchema);

export default IntelProcessor;
