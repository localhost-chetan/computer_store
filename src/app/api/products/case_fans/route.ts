import dbConnect from "@/lib/mongodb/utils/dbConnect";
import CaseFan from "@/lib/mongodb/models/products/case_fans/CaseFan";

const GET = async () => {
  await dbConnect();

  const case_fans = await CaseFan.find();

  return Response.json(case_fans);
};

export { GET };
