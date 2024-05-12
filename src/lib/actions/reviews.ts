"use server";

import User from "../mongodb/models/User/User";
import dbConnect from "../mongodb/utils/dbConnect";

const getReviews = async (userId: string) => {
  try {
    await dbConnect();
    // Find the user by ID
    const user = await User.findOne({ clerkId: userId });

    console.log(user.reviews);

    // Get the existing wishlist (or initialize empty array)
    const reviews = user.reviews || [];

    return reviews;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Something went wrong!", error.message);
    }
    return { message: "Unable to get your reviews." };
  }
};

export { getReviews };
