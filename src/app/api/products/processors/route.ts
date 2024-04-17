import Processor from "@/lib/mongodb/models/products/processors/Processor";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const processors = await Processor.find();

    return Response.json(processors);
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching data ${error}` },
      { status: 500 }
    );
  }
};

export { GET };
