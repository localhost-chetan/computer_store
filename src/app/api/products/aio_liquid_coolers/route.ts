import AIOLiquidCooler from "@/lib/mongodb/models/products/aio_liquid_coolers/AIOLiquidCooler";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const aio_liquid_coolers = await AIOLiquidCooler.find();

  return Response.json(aio_liquid_coolers);
};

export { GET };
