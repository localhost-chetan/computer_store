import Monitor from "@/lib/mongodb/models/products/monitors/Monitor";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const monitors = await Monitor.find();

  return Response.json(monitors);
};

export { GET };
