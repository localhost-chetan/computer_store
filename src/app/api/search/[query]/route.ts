import AIOLiquidCooler from "@/lib/mongodb/models/products/aio_liquid_coolers/AIOLiquidCooler";
import Cabinet from "@/lib/mongodb/models/products/cabinets/Cabinet";
import CaseFan from "@/lib/mongodb/models/products/case_fans/CaseFan";
import GPU from "@/lib/mongodb/models/products/graphics_cards/GPU";
import Headset from "@/lib/mongodb/models/products/headsets/Headset";
import Keyboard from "@/lib/mongodb/models/products/keyboards/Keyboard";
import Monitor from "@/lib/mongodb/models/products/monitors/Monitor";
import Motherboard from "@/lib/mongodb/models/products/motherboards/Motherboard";
import Mouse from "@/lib/mongodb/models/products/mouses/Mouse";
import PowerSupply from "@/lib/mongodb/models/products/power_supplies/PowerSupply";
import Processor from "@/lib/mongodb/models/products/processors/Processor";
import RAM from "@/lib/mongodb/models/products/ram_modules/RAM";
import Storage from "@/lib/mongodb/models/products/storage_devices/Storage";
// import { Product } from "@/lib/mongodb/models/products/Product";
import dbConnect from "@/lib/mongodb/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ query: string }> },
) => {
  try {
    await dbConnect();

    const { query } = await params
    const searchTerms = query.toLowerCase().split(/\s+/); // Split into words

    const searchOptions = {
      $or: searchTerms.map((term) => ({
        $and: [
          // Add an $and condition
          {
            $or: [
              // Text search on relevant fields
              { name: { $regex: new RegExp(term, "i") } },
              { description: { $regex: new RegExp(term, "i") } },
              { category: { $regex: new RegExp(term, "i") } },
            ],
          },
          { price: { $exists: true } }, // Only include price if it exists (numeric)
        ],
      })),
    };

    const data1 = await GPU.find(searchOptions);
    const data2 = await AIOLiquidCooler.find(searchOptions);
    const data3 = await Cabinet.find(searchOptions);
    const data4 = await CaseFan.find(searchOptions);
    const data5 = await Headset.find(searchOptions);
    const data6 = await Keyboard.find(searchOptions);
    const data7 = await Monitor.find(searchOptions);
    const data8 = await Motherboard.find(searchOptions);
    const data9 = await Mouse.find(searchOptions);
    const data10 = await PowerSupply.find(searchOptions);
    const data11 = await Processor.find(searchOptions);
    const data12 = await RAM.find(searchOptions);
    const data13 = await Storage.find(searchOptions);

    const searchedProducts = [
      ...data1,
      ...data2,
      ...data3,
      ...data4,
      ...data5,
      ...data6,
      ...data7,
      ...data8,
      ...data9,
      ...data10,
      ...data11,
      ...data12,
      ...data13,
    ];

    return NextResponse.json(searchedProducts, { status: 200 });
  } catch (error) {
    console.log(`[search_GET] ${error}`);
    return new NextResponse(`Internal server error!`, { status: 500 });
  }
};

export { GET };
