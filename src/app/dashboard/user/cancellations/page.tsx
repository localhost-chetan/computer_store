"use client";

import Empty from "@/components/Empty";
import { getCancellations } from "@/lib/actions/cancellations";
import { useClerk } from "@clerk/nextjs";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const CancellationsPage = () => {
  const { user } = useClerk();

  const [isLoading, setIsLoading] = useState(true);
  const [cancellation, setCancellations] = useState([]);

  console.log(user?.id);

  useEffect(() => {
    (async () => {
      try {
        const data = await getCancellations(user?.id!);
        setCancellations(data);
      } catch (error) {
        console.log(`Something went wrong! ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log(cancellation);

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
      ) : !(cancellation.length >= 1) ? (
        <Empty>{`Your have not cancelled anything yet. 😎`}</Empty>
      ) : (
        <h2 className={`text-2xl font-bold`}>Your Cancellations</h2>
      )}
    </>
  );
};

export default CancellationsPage;
