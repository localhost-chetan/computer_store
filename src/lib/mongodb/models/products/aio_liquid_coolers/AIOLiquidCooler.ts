import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type AIOLiquidCoolerType = CommonFields;

const aioLiquidCoolerSchema = new Schema<AIOLiquidCoolerType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: discountSchema,
    reviews: [reviewSchema],
  },
  { collection: "aio_liquid_coolers" }
);

const AIOLiquidCooler =
  models.AIOLiquidCooler || model("AIOLiquidCooler", aioLiquidCoolerSchema);

export default AIOLiquidCooler;
