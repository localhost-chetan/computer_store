"use server";

import User from "../mongodb/models/User/User";
import dbConnect from "../mongodb/utils/dbConnect";

const addToWishList = async (
  productId: string,
  userId: string,
  productName: string,
): Promise<{ message: string }> => {
  try {
    await dbConnect();

    // Find the user by ID
    const user = await User.findOne({ clerkId: userId });

    console.log(user.wishlist);

    if (!user) {
      throw new Error("User not found");
    }

    // Get the existing wishlist (or initialize empty array)
    const wishlist = user.wishlist || [];

    // Check if product already exists in wishlist (optional)
    const alreadyInWishlist = wishlist.find((item: any) => item === productId);

    if (alreadyInWishlist) {
      return { message: "Product already in wishlist" }; // Optional: handle duplicate addition
    }

    // Update wishlist by adding the product ID
    wishlist.push(productId);

    // Update the user document with the updated wishlist
    await User.updateOne({ clerkId: userId }, { wishlist: wishlist });

    return { message: `${productName} added to wishlist` }; // Success message (optional)
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error adding product to wishlist:", error.message);
    }
    return { message: "Unable to save product to wishlist" }; // Error message
  }
};

const getWishlist = async (userId: string) => {
  try {
    await dbConnect();
    // Find the user by ID
    const user = await User.findOne({ clerkId: userId });

    console.log(user.wishlist);

    // Get the existing wishlist (or initialize empty array)
    const wishlist = user.wishlist || [];

    return wishlist;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Something went wrong!", error.message);
    }
    return { message: "Unable to get your wishlist" };
  }
};

export { addToWishList, getWishlist };
