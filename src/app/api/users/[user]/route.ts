import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import User from "@/lib/mongodb/models/User/User";

const GET = async () => {
  await dbConnect();
  const data = await User.find();
  return NextResponse.json(data);
};

export { GET };
