import AirCooler from "@/lib/mongodb/models/products/air_coolers/AirCooler";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const air_coolers = await AirCooler.find();

  return Response.json(air_coolers);
};

export { GET };
