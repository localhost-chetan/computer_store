import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type KeyboardType = CommonFields;

const keyboardSchema = new Schema<KeyboardType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: [discountSchema],
    reviews: [reviewSchema],
  },
  { collection: "power_supplies" }
);

const Keyboard = models.Keyboard || model("Keyboard", keyboardSchema);

export default Keyboard;
