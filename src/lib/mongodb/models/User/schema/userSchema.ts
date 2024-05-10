import { Schema } from "mongoose";
import {
  type Product,
  type Address,
  type Order,
  type Cancellation,
  type Review,
  WishList,
} from "../type/userTypes";

// Define Product schema
const productSchema = new Schema<Product>({
  productId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
});

// Define Address schema
const addressSchema = new Schema<Address>({
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

// Define Order schema
const orderSchema = new Schema<Order>({
  orderId: { type: Schema.Types.ObjectId, required: true },
  items: { type: [productSchema], required: true },
  orderDate: { type: Date, required: true },
  status: { type: String, required: true },
  shippingAddress: { type: Object, required: true },
  billingAddress: { type: [addressSchema] },
});

// Define Cancellation schema
const cancellationSchema = new Schema<Cancellation>({
  orderId: { type: Schema.Types.ObjectId, required: true },
  items: { type: [productSchema], required: true },
  orderDate: { type: Date, required: true },
  cancellationDate: { type: Date, required: true },
  cancellationReason: { type: String },
});

// Define Review schema
const reviewSchema = new Schema<Review>({
  reviewId: { type: Schema.Types.ObjectId, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  reviewDate: { type: Date, required: true },
});

const wishlistSchema = new Schema<WishList>({
  productId: { type: Schema.Types.ObjectId, required: true },
});

export {
  productSchema,
  addressSchema,
  orderSchema,
  cancellationSchema,
  reviewSchema,
  wishlistSchema,
};
