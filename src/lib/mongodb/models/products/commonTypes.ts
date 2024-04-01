import { Schema } from "mongoose";
import { type Review } from "../User/type/userTypes";

export type Discount = {
  isActive: boolean;
  percentage: number;
  startDate: Date;
  endDate: Date;
};

export const reviewSchema = new Schema<Review>({
  reviewId: { type: Schema.Types.ObjectId },
  productId: { type: Schema.Types.ObjectId },
  rating: { type: Number },
  comment: { type: String },
  reviewDate: { type: Date, default: Date.now },
});

export const discountSchema = new Schema<Discount>({
  isActive: { type: Boolean, required: true },
  percentage: { type: Number, required: true, min: 0, max: 100 }, // Added validation
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

export type CommonFields = {
  name: string;
  description: string;
  price: number;
  category: string;
  imageURLs?: string[];
  reviews?: Review[];
  discount?: Discount;
};
