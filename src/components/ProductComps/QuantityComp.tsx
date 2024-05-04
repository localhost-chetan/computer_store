"use client";

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const QuantityComp = ({
  min = 1,
  max = 10,
  scale,
  showText = true,
}: {
  min?: number;
  max?: number;
  scale?: string;
  showText?: boolean;
}) => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, max));
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, min));
  };

  return (
    <div className={cn(`flex items-stretch gap-2 font-semibold ${scale}`)}>
      <div className={cn(`self-center ${showText ? "block" : "hidden"}`)}>
        Qty:
      </div>

      <div className={`flex overflow-hidden rounded-md`}>
        <div className={``}>
          <Button
            isIconOnly
            radius={`none`}
            className={`text-xl font-medium`}
            onClick={handleDecrement}
          >
            -
          </Button>
        </div>

        <div className={`flex items-center bg-slate-300 px-4 dark:bg-gray-500`}>
          {counter}
        </div>

        <div className={``}>
          <Button
            isIconOnly
            radius={`none`}
            className={`text-xl font-medium`}
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuantityComp;
