import Monitor from "@/lib/mongodb/models/products/monitors/Monitor";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const monitors = await Monitor.find();

    return Response.json(monitors);
  } catch (error) {
    return NextResponse.json(
      { erro: `Error fetching data ${error}` },
      { status: 500 }
    );
  }
};

export { GET };
