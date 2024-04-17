import AirCooler from "@/lib/mongodb/models/products/air_coolers/AirCooler";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const air_coolers = await AirCooler.find();

    return Response.json(air_coolers);
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching data ${error} ` },
      { status: 500 }
    );
  }
};

export { GET };
