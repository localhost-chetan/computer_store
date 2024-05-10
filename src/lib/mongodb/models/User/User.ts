import { Schema, model, models } from "mongoose";
import { type UserType } from "./type/userTypes";
import {
  orderSchema,
  cancellationSchema,
  reviewSchema,
  wishlistSchema,
} from "./schema/userSchema";

const userSchema = new Schema<UserType>(
  {
    clerkId: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, // Ensure unique email
    fullName: { type: String, required: true },
    avatar: { type: String },
    orders: { type: [orderSchema], default: [] }, // Array of orders (embedded documents)
    cancellations: { type: [cancellationSchema], default: [] }, // Array of cancellations (embedded documents)
    reviews: { type: [reviewSchema], default: [] }, // Array of reviews (embedded documents)
    wishlist: { type: [wishlistSchema], default: [] },
    password: { type: String, default: null }, // Hashed password for security
    phoneNumber: { type: String, default: null, required: true },
  },
  { timestamps: true },
);

// Consider using mongoose.Schema.Types.ObjectId for order, product, cancellation, and review IDs
// userSchema.add({ orderId: { type: mongoose.Schema.Types.ObjectId, required: true } });

const User = models.User || model<UserType>("User", userSchema);

export default User;
