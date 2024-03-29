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
      console.log(`Something went wrong`);
    }
  }
};

export { createUser };
