import PowerSupply from "@/lib/mongodb/models/products/power_supplies/PowerSupply";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const power_supplies = await PowerSupply.find();

  return Response.json(power_supplies);
};

export { GET };
