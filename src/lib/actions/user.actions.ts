"use server";

import dbConnect from "../mongodb/utils/dbConnect";
import { type UserType } from "../mongodb/models/User/type/userTypes";
import User from "../mongodb/models/User/User";

const createUser = async (user: UserType) => {
  try {
    await dbConnect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "MongoServerError") {
        console.error("Error creating user:", error.message);
        // You can also throw a custom error here to propagate it to the calling function
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }
};

export { createUser };
