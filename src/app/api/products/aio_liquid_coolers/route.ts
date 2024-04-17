import AIOLiquidCooler from "@/lib/mongodb/models/products/aio_liquid_coolers/AIOLiquidCooler";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const aio_liquid_coolers = await AIOLiquidCooler.find();

    return Response.json(aio_liquid_coolers);
  } catch (error) {
    return NextResponse.json({ error: `Error fetching data` }, { status: 500 });
  }
};

export { GET };
