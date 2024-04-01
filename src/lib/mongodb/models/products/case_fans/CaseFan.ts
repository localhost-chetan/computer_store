import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type CaseFanType = CommonFields;

const caseFanSchema = new Schema<CaseFanType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: [discountSchema],
    reviews: [reviewSchema],
  },
  { collection: "case_fans" }
);

const CaseFan = models.CaseFan || model("CaseFan", caseFanSchema);

export default CaseFan;
