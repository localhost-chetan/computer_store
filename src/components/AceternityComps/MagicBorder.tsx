import { Button } from "@nextui-org/react";
import Link from "next/link";

const MagicBorder = () => {
  return (
    <Button
      as={Link}
      href={`/products`}
      size={`sm`}
      className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-[.7rem] font-medium text-white backdrop-blur-3xl">
        Shop 🎁
      </span>
    </Button>
  );
};

export default MagicBorder;
