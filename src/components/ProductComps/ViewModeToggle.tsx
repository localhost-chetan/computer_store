"use client";

import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";
import ListView from "./ProductSection/ListView";
import GridView from "./ProductSection/GridView";
import { useState } from "react";
import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";

type ViewModeTogglePropTypes = {
  data: CommonFields[];
  params: string;
};

const ViewModeToggle = ({ data, params }: ViewModeTogglePropTypes) => {
  const buttonProps = {
    size: 25,
    radius: "sm",
  } as const;

  const [viewMode, setViewMode] = useState("grid");

  return (
    <>
      <div className={`flex items-center justify-between gap-x-2`}>
        <h1 className={`text-2xl font-extrabold capitalize`}>
          {data?.at(0)?.category} Products
        </h1>

        <div className={`space-x-2 md:scale-85 lg:scale-100`}>
          <Tooltip content="Grid View">
            <Button
              isIconOnly
              radius={buttonProps.radius!}
              //   isDisabled={viewMode === "grid" && true}
              onClick={() => setViewMode("grid")}
            >
              <BsGrid3X3GapFill size={buttonProps.size} />
            </Button>
          </Tooltip>

          <Tooltip content="List View">
            <Button
              isIconOnly
              radius={buttonProps.radius!}
              //   isDisabled={viewMode === "list" && true}
              onClick={() => window.innerWidth > 770 && setViewMode("list")}
            >
              <FaThList size={buttonProps.size} />
            </Button>
          </Tooltip>
        </div>
      </div>

      {viewMode === "grid" && (
        <GridView data={data as CommonFields[]} params={params} />
      )}

      {viewMode === "list" && (
        <ListView data={data as CommonFields[]} params={params} />
      )}
    </>
  );
};

export default ViewModeToggle;
