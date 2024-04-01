import Cabinet from "@/lib/mongodb/models/products/cabinets/Cabinet";
import Headset from "@/lib/mongodb/models/products/headsets/Headset";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const cabinets = await Cabinet.find();
  const headsets = await Headset.find();
  return Response.json({ cabinets, headsets });
};

export { GET };
