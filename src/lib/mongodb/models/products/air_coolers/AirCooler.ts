import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type AirCoolerType = CommonFields;

const airCoolerSchema = new Schema<AirCoolerType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: [discountSchema],
    reviews: [reviewSchema],
  },
  { collection: "air_coolers" }
);

const AirCooler = models.AirCooler || model("AirCooler", airCoolerSchema);

export default AirCooler;
