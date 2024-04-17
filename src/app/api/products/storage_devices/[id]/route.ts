import Storage from "@/lib/mongodb/models/products/storage_devices/Storage";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await dbConnect();
    console.log("Successfully connected to MongoDB"); // For debugging

    const productDetails = await Storage.findById(params.id);

    if (!productDetails) {
      // Handle case where product with ID not found
      return new Response("Product not found", { status: 404 });
    }

    return Response.json(productDetails);
  } catch (error: any) {
    if (error instanceof Error) {
      console.error("Error fetching product details:", error); // Log detailed error
      return new Response(`Error fetching product details: ${error.message}`, {
        status: 500,
      });
    }
  }
};

export { GET };
