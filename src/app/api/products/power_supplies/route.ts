import PowerSupply from "@/lib/mongodb/models/products/power_supplies/PowerSupply";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const power_supplies = await PowerSupply.find();

    return Response.json(power_supplies);
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching data ${error}` },
      { status: 500 }
    );
  }
};

export { GET };
