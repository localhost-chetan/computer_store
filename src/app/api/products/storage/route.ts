import Storage from "@/lib/mongodb/models/products/storage/Storage";
import dbConnect from "@/lib/mongodb/utils/dbConnect";

const GET = async () => {
  await dbConnect();

  const storage = await Storage.find();

  return Response.json(storage);
};

export { GET };
