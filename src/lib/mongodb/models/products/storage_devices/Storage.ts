import { Schema, models, model } from "mongoose";
import { CommonFields, discountSchema, reviewSchema } from "../commonTypes";

type StorageType = CommonFields;

const storageSchema = new Schema<StorageType>(
  {
    name: String,
    description: String,
    price: String,
    category: String,
    imageURLs: [String],
    discount: discountSchema,
    reviews: [reviewSchema],
  },
  { collection: "storage" }
);

const Storage = models.Storage || model("Storage", storageSchema);

export default Storage;
