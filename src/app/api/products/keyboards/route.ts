import Keyboard from "@/lib/mongodb/models/products/keyboards/Keyboard";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const keyboards = await Keyboard.find();
    return Response.json(keyboards);
  } catch (error) {
    return NextResponse.json(
      { error: `Error in fetching data ${error}` },
      { status: 500 }
    );
  }
};

export { GET };
