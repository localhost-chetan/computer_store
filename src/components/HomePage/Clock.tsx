"use client";

import { useEffect, useState } from "react";

const Clock = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 59, // Start at 59 seconds
  });

  const deadline = new Date(`May 25, 2024`); // Replace with your target date

  const getTime = () => {
    const differenceInMilliseconds = deadline.getTime() - Date.now();

    // Ensure positive remaining time (avoid negative display)
    const adjustedDifference = Math.max(0, differenceInMilliseconds);

    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(adjustedDifference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (adjustedDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (adjustedDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor((adjustedDifference % (1000 * 60)) / 1000);

    console.log(hours);

    // Update state only if any time component has changed
    const hasChanged =
      days !== remainingTime.days ||
      hours !== remainingTime.hours ||
      minutes !== remainingTime.minutes ||
      seconds !== remainingTime.seconds;

    if (hasChanged) {
      setRemainingTime({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(getTime, 1000); // Update every second

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  const hasRemainingTime =
    remainingTime.days > 0 ||
    remainingTime.hours > 0 ||
    remainingTime.minutes > 0 ||
    remainingTime.seconds > 0;

  return (
    <div
      className={` font-extrabold text-xl md:text-2xl items-center gap-x-3 tabular-nums ${
        hasRemainingTime ? `flex` : `hidden`
      } justify-start text-nowrap`}
    >
      <h3 className={``}>
        <div className={`text-xs lg:text-sm font-normal`}>Days</div>
        <div>{remainingTime.days.toString().padStart(2, `0`)} :</div>
      </h3>
      <h3 className={``}>
        <div className={`text-xs lg:text-sm font-normal`}>Hours</div>
        <div> {remainingTime.hours.toString().padStart(2, "0")} :</div>
      </h3>
      <h3 className={``}>
        <div className={`text-xs lg:text-sm font-normal`}>Minutes</div>
        <div> {remainingTime.minutes.toString().padStart(2, "0")} :</div>
      </h3>
      <h3 className={``}>
        <div className={`text-xs lg:text-sm font-normal`}>Seconds</div>
        <div> {remainingTime.seconds.toString().padStart(2, "0")}</div>
      </h3>
    </div>
  );
};

export default Clock;
