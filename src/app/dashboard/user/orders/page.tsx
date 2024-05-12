"use client";

import Empty from "@/components/Empty";
import { getOrders } from "@/lib/actions/orders";
import { useClerk } from "@clerk/nextjs";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const WishlistPage = () => {
  const { user } = useClerk();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  console.log(user?.id);

  useEffect(() => {
    (async () => {
      try {
        const data = await getOrders(user?.id!);
        setOrders(data);
      } catch (error) {
        console.log(`Something went wrong! ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log(orders);

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
      ) : !(orders.length >= 1) ? (
        <Empty>{`Your have not ordered anything yet. 😭`}</Empty>
      ) : (
        <h2 className={`text-2xl font-bold`}>Your Orders</h2>
      )}
    </>
  );
};

export default WishlistPage;
