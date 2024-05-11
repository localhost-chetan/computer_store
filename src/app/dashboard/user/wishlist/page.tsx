"use client";

import Empty from "@/components/Empty";
import { getWishlist } from "@/lib/actions/wishlist";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const WishlistPage = () => {
  const { user } = useClerk();

  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    document.addEventListener("load", async () => {
      const response = await getWishlist(user?.id.toString()!);
      setWishlist(response);
    });
  }, []);

  console.log(wishlist);

  return (
    <>
      <Empty>Wishlist Page</Empty>
    </>
  );
};

export default WishlistPage;
