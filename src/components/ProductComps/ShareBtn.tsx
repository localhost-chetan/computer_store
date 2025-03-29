"use client";

import { Button } from "@nextui-org/react";
import { FaShareAlt } from "react-icons/fa";

export default function ShareBtn() {
  return (
    <Button
      radius={`full`}
      size={`sm`}
      isIconOnly
      title={`Share this Product on Social Media`}
    >
      <FaShareAlt size={18} />
    </Button>
  );
}
