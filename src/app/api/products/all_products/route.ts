import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import { NextResponse } from "next/server";

const GET = async (_request: Request) => {
  try {
    const responseHeadsets = await fetch(
      `${process.env.BASE_URL}/api/products/headsets`,
    );

    const headsets = await responseHeadsets.json();

    // **************************************************************************

    const responseKeyboards = await fetch(
      `${process.env.BASE_URL}/api/products/keyboards`,
    );

    const keyboards = await responseKeyboards.json();

    // ******************************************************************

    const responseAIOLiquidCoolers = await fetch(
      `${process.env.BASE_URL}/api/products/aio_liquid_coolers`,
    );

    const aioLiquidCoolers = await responseAIOLiquidCoolers.json();

    // ****************************************************************

    const responseCabinets = await fetch(
      `${process.env.BASE_URL}/api/products/cabinets`,
    );

    const cabinets = await responseCabinets.json();

    // ***********************************************************************

    const responseCaseFans = await fetch(
      `${process.env.BASE_URL}/api/products/case_fans`,
    );

    const caseFans = await responseCaseFans.json();

    // *******************************************************************************

    const responseGraphicsCards = await fetch(
      `${process.env.BASE_URL}/api/products/graphics_cards`,
    );

    const graphicsCards = await responseGraphicsCards.json();

    // ******************************************************************************

    const responseMonitors = await fetch(
      `${process.env.BASE_URL}/api/products/monitors`,
    );

    const monitors = await responseMonitors.json();

    // *********************************************************************************

    const responseMotherboards = await fetch(
      `${process.env.BASE_URL}/api/products/motherboards`,
    );

    const motherboards = await responseMotherboards.json();

    // ***********************************************************************8

    const responseMouses = await fetch(
      `${process.env.BASE_URL}/api/products/mouses`,
    );

    const mouses = await responseMouses.json();

    // ******************************************************************************

    const responsePowerSupplies = await fetch(
      `${process.env.BASE_URL}/api/products/power_supplies`,
    );

    const powerSupplies = await responsePowerSupplies.json();

    // *************************************************************************

    const responseProcessors = await fetch(
      `${process.env.BASE_URL}/api/products/processors`,
    );

    const processors = await responseProcessors.json();

    // *****************************************************************************

    const responseRAMModules = await fetch(
      `${process.env.BASE_URL}/api/products/ram_modules`,
    );

    const RAMModules = await responseRAMModules.json();

    // *************************************************************************************

    const responseStorageDevices = await fetch(
      `${process.env.BASE_URL}/api/products/storage_devices`,
    );

    const storageDevices = await responseStorageDevices.json();

    // *******************************************************************************

    const allProducts: CommonFields[] = [
      ...headsets,
      ...storageDevices,
      ...processors,
      ...RAMModules,
      ...powerSupplies,
      ...keyboards,
      ...mouses,
      ...aioLiquidCoolers,
      ...cabinets,
      ...motherboards,
      ...caseFans,
      ...graphicsCards,
      ...monitors,
    ];

    return NextResponse.json(allProducts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch data ${error}` },
      { status: 500 },
    );
  }
};

export { GET };
