import GPU from "@/lib/mongodb/models/products/graphics_cards/GPU";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const graphics_cards = await GPU.find();

  return Response.json(graphics_cards);
};

export { GET };
