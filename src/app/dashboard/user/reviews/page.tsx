"use client";

import Empty from "@/components/Empty";
import { getReviews } from "@/lib/actions/reviews";
import { useClerk } from "@clerk/nextjs";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const WishlistPage = () => {
  const { user } = useClerk();

  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  console.log(user?.id);

  useEffect(() => {
    (async () => {
      try {
        const data = await getReviews(user?.id!);
        setReviews(data);
      } catch (error) {
        console.log(`Something went wrong! ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log(reviews);

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
      ) : !(reviews.length >= 1) ? (
        <Empty>{`Your have not reviewed anything yet. 😭`}</Empty>
      ) : (
        <h2 className={`text-2xl font-bold`}>Your Reviews</h2>
      )}
    </>
  );
};

export default WishlistPage;
