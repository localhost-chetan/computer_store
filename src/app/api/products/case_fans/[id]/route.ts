import CaseFan from "@/lib/mongodb/models/products/case_fans/CaseFan";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextResponse } from "next/server";

const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await dbConnect();
    console.log("Successfully connected to MongoDB"); // For debugging

    const productDetails = await CaseFan.findById(params.id);

    if (!productDetails) {
      // Handle case where product with ID not found
      return new Response("Product not found", { status: 404 });
    }

    return Response.json(productDetails);
  } catch (error: any) {
    if (error instanceof Error) {
      console.error("Error fetching product details:", error); // Log detailed error
      return NextResponse.json(
        { error: `Error fetching product details: ${error.message}` },
        {
          status: 500,
        }
      );
    }
  }
};

export { GET };
