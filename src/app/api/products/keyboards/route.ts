import Keyboard from "@/lib/mongodb/models/products/keyboards/Keyboard";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const keyboards = await Keyboard.find();

  return Response.json(keyboards);
};

export { GET };
