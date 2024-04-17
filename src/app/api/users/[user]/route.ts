import dbConnect from "@/lib/mongodb/utils/dbConnect";
import User from "@/lib/mongodb/models/User/User";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();
    const data = await User.find();
    return Response.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching user details ${error}` },
      { status: 500 }
    );
  }
};

export { GET };
