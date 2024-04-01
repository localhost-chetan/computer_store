import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../../commonTypes";

type AMDProcessorType = CommonFields;

const amdProcessorSchema = new Schema<AMDProcessorType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: [discountSchema],
    reviews: [reviewSchema],
  },
  { collection: "amd_processors" }
);

const AMDProcessor =
  models.AMDProcessor || model("AMDProcessor", amdProcessorSchema);

export default AMDProcessor;
