import { Schema, models, model, Types } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type KeyboardType = CommonFields;

const keyboardSchema = new Schema<KeyboardType>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, reuiqred: true },
    category: { type: String, required: true },
    imageURLs: { type: [String], default: [] },
    discount: { type: discountSchema, default: {} },
    reviews: { type: [reviewSchema], default: [] },
  },
  { collection: "keyboards" }
);

const Keyboard = models.Keyboard || model("Keyboard", keyboardSchema);

export default Keyboard;
