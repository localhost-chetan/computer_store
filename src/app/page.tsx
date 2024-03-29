"use client";

import { Button } from "@nextui-org/react";
import MagicBorder from "@/components/AceternityComps/MagicBorder";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  console.log(`Before useEffect`);

  useEffect(() => {
    console.log(`After component mounts`);
  });

  console.log(`Before useEffect😎`);

  return (
    <section className={`flex flex-col justify-center items-center gap-2`}>
      <h1 className={`text-2xl`}>Home Page</h1>
      <Button variant={`shadow`} color={`danger`} radius={`sm`} className={``}>
        Add to cart
      </Button>

      <MagicBorder href={`/products`} size={`sm`} className={`text-[.8rem]`}>
        Shop 🎁
      </MagicBorder>

      <div>
        <h2>{count}</h2>
        <Button onClick={() => setCount((prevValue) => prevValue + 1)}>
          Change
        </Button>
      </div>
    </section>
  );
}
