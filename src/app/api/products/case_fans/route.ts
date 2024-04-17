import dbConnect from "@/lib/mongodb/utils/dbConnect";
import CaseFan from "@/lib/mongodb/models/products/case_fans/CaseFan";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await dbConnect();

    const case_fans = await CaseFan.find();

    return Response.json(case_fans);
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching data ${error}` },
      { status: 500 }
    );
  }
};

export { GET };
