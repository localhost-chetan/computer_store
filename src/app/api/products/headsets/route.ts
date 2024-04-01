import Headset from "@/lib/mongodb/models/products/headsets/Headset";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const headsets = await Headset.find();

  return Response.json(headsets);
};

export { GET };
