import { Schema, model, Types } from "mongoose";
import { type UserType } from "./type/userTypes";
import {
  orderSchema,
  cancellationSchema,
  reviewSchema,
} from "./schema/userSchema";

const userSchema = new Schema<UserType>(
  {
    _id: { type: Types.ObjectId, required: true, unique: true },
    clerkId: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, // Ensure unique email
    fullName: { type: String, required: true },
    avatar: { type: String },
    orders: { type: [orderSchema], default: [] }, // Array of orders (embedded documents)
    cancellations: { type: [cancellationSchema], default: [] }, // Array of cancellations (embedded documents)
    reviews: { type: [reviewSchema], default: [] }, // Array of reviews (embedded documents)
    password: { type: String, required: true }, // Hashed password for security
    phoneNumber: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// Consider using mongoose.Schema.Types.ObjectId for order, product, cancellation, and review IDs
// userSchema.add({ orderId: { type: mongoose.Schema.Types.ObjectId, required: true } });

const User = model<UserType>("User", userSchema);

export default User;
