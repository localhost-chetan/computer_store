"use client";

import Empty from "@/components/Empty";
import { getProductData } from "@/lib/actions/product";
import { getWishlist } from "@/lib/actions/wishlist";
import { useClerk } from "@clerk/nextjs";
import { Divider, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const WishlistPage = () => {
  const { user } = useClerk();

  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  console.log(user?.id);

  useEffect(() => {
    (async () => {
      try {
        const data = await getWishlist(user?.id!);
        setWishlist(data);
      } catch (error) {
        console.log(`Something went wrong! ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    async () => {
      try {
        const data = await getProductData();
        console.log(data);
      } catch (error) {
        console.log(`Something went wrong!`);
      }
    };
  }, [wishlist]);

  console.log(wishlist);

  return (
    <>
      {isLoading ? (
        <Spinner
          color={`warning`}
          size={`lg`}
          className={`flex h-full w-full items-center justify-center`}
        >
          Loading...
        </Spinner>
      ) : !(wishlist.length >= 1) ? (
        <Empty>{`Your wishlist is empty. 😭`}</Empty>
      ) : (
        <div className={`space-y-5`}>
          <h2 className={`text-2xl font-bold`}>Your Wishlist</h2>

          <div className={`space-y-4`}>
            {wishlist.map((productId: string) => {
              return (
                <>
                  <div
                    className={`h-36 space-y-3 rounded-sm p-5 text-3xl font-extrabold`}
                  >
                    {productId}
                  </div>
                  <Divider />
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default WishlistPage;
