"use server";

import User from "../mongodb/models/User/User";
import dbConnect from "../mongodb/utils/dbConnect";

const getCancellations = async (userId: string) => {
  try {
    await dbConnect();
    // Find the user by ID
    const user = await User.findOne({ clerkId: userId });

    console.log(user.cancellations);

    // Get the existing wishlist (or initialize empty array)
    const cancellations = user.cancellations || [];

    return cancellations;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Something went wrong!", error.message);
    }
    return { message: "Unable to get your cancellations." };
  }
};

export { getCancellations };
