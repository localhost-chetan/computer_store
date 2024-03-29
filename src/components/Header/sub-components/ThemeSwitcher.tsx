"use client";

import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Spinner } from "@nextui-org/react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []); //Will be only executed after the component mounts for the first time

  console.log(`Theme Switcher`);

  if (!mounted)
    return (
      // Fallback UI for theme button until component is mounted
      <Spinner />
    );

  if (resolvedTheme === "dark") {
    return (
      <IoMdSunny
        onClick={() => setTheme("light")}
        className={`hover:cursor-pointer text-2xl sm:text-[1.7rem] ml-auto`}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <IoMdMoon
        onClick={() => setTheme("dark")}
        className={`hover:cursor-pointer text-2xl sm:text-[1.7rem] ml-auto`}
      />
    );
  }
}
