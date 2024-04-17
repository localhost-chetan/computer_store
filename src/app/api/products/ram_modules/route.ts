import RAM from "@/lib/mongodb/models/products/ram_modules/RAM";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const ram_modules = await RAM.find();

    return Response.json(ram_modules);
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching data ${error}` },
      { status: 500 }
    );
  }
};

export { GET };
