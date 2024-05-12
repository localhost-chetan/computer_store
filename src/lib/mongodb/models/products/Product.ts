import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
  discount: { percentage: { type: Number, default: 10 } },
  // Add other relevant fields like images (array of strings), stock (number)
});

export const Product = mongoose.model("Product", productSchema);
