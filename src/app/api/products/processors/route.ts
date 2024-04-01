import AMDProcessor from "@/lib/mongodb/models/products/processors/amd_processors/AMDProcessor";
import IntelProcessor from "@/lib/mongodb/models/products/processors/intel_processors/IntelProcessor";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const intel_processors = await IntelProcessor.find();
  const amd_rocessors = await AMDProcessor.find();

  return Response.json([...intel_processors, ...amd_rocessors]);
};

export { GET };
