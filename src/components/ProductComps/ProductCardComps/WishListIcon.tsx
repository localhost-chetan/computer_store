"use client";

import { FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addToWishList } from "@/lib/actions/wishlist";

const WishListIcon = ({
  className,
  productId,
  productName,
}: {
  className?: string;
  productId: string[];
  productName?: string;
}) => {
  const { user } = useClerk();
  const router = useRouter();

  const handleClick = async () => {
    if (!user) {
      router.push(`/sign-in`);
      return;
    } else {
      try {
        const response = await addToWishList(
          productId?.at(0)?.toString()!,
          user?.id.toString()!,
          productName!,
        );

        toast.success(response.message);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error(`Something went wrong!`);
        }
      }
    }
  };

  return (
    <div className={cn(``, className)}>
      <span className={`sr-only`}>Add to Wishlist</span>
      <Tooltip
        content={"Add to Wishlist"}
        color={`danger`}
        shadow={`lg`}
        showArrow
        size={`sm`}
        placement={`top`}
        offset={1}
        delay={0}
        closeDelay={0}
        motionProps={{
          variants: {
            exit: {
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: "easeIn",
              },
            },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <motion.button
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          className={`scale-0 cursor-pointer rounded-full bg-rose-500 p-2 shadow-lg shadow-slate-300 ease-in-out group-hover/card:scale-100 motion-safe:transition-transform dark:shadow-gray-800`}
          onClick={handleClick}
        >
          <FaRegHeart className={`text-white`} size={18} />
        </motion.button>
      </Tooltip>
    </div>
  );
};

export default WishListIcon;
