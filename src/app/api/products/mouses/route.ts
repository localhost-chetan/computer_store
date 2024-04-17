import Mouse from "@/lib/mongodb/models/products/mouses/Mouse";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const mouses = await Mouse.find();

    return Response.json(mouses);
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching data ${error}` },
      { status: 500 }
    );
  }
};

export { GET };
