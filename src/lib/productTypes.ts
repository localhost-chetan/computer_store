import { Review } from "./mongodb/models/User/type/userTypes";

export type CardCompType = {
  params?: string;
  productId: string;
  productName: string;
  description: string;
  imageURLs: string[];
  index?: number;
  discountPercent: number;
  productCategory?: string;
  price: number;
  productReviews: Review[];
  classNames?: string;
};
