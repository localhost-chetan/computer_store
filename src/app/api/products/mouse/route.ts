import Mouse from "@/lib/mongodb/models/products/mouse/Mouse";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const mouses = await Mouse.find();

  return Response.json(mouses);
};

export { GET };
