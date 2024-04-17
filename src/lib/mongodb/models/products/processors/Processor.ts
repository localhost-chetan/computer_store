import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type ProcessorType = CommonFields;

const processorSchema = new Schema<ProcessorType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: discountSchema,
    reviews: [reviewSchema],
  },
  { collection: "processors" }
);

const Processor = models.Processor || model("Processor", processorSchema);

export default Processor;
