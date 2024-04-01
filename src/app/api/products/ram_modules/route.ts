import RAM from "@/lib/mongodb/models/products/ram_modules/RAM";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const ram_modules = await RAM.find();

  return Response.json(ram_modules);
};

export { GET };
