import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type PowerSupplyType = CommonFields;

const powerSupplySchema = new Schema<PowerSupplyType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: discountSchema,
    reviews: [reviewSchema],
  },
  { collection: "power_supplies" }
);

const PowerSupply =
  models.PowerSupply || model("PowerSupply", powerSupplySchema);

export default PowerSupply;
