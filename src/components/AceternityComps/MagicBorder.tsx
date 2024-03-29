import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const MagicBorder = ({
  href,
  size,
  className,
  children,
}: {
  href: string;
  size: "sm" | "md" | "lg";
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      as={Link}
      href={href}
      size={size}
      className={`relative inline-flex  overflow-hidden p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 rounded-full`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          `inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl rounded-full`,
          className
        )}
      >
        {children}
      </span>
    </Button>
  );
};

export default MagicBorder;
