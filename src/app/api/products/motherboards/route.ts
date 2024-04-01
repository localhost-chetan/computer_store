import Motherboard from "@/lib/mongodb/models/products/motherboards/Motherboard";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const motherboards = await Motherboard.find();

  return Response.json(motherboards);
};

export { GET };
