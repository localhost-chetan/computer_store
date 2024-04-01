import Cabinet from "@/lib/mongodb/models/products/cabinets/Cabinet";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const cabinets = await Cabinet.find();

  return Response.json(cabinets);
};

export { GET };
