"use client";
import frame from "@/public/images/flower.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<{
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-13");

    const calculateTimeLeft = () => {
      const now = new Date();

      // Calculate total months difference
      let months = (targetDate.getFullYear() - now.getFullYear()) * 12;
      months += targetDate.getMonth() - now.getMonth();

      if (targetDate < now) months = 0; // Handle past dates gracefully

      // Calculate remaining time
      const tempDate = new Date(now);
      tempDate.setMonth(tempDate.getMonth() + months);

      const difference = targetDate.getTime() - tempDate.getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full items-center justify-center flex flex-wrap gap-x-[10px] lg:gap-x-[20px]">
      <TimerItem
        timer={timeLeft.months}
        value={timeLeft.months > 1 ? "Months" : "Month"}
      />
      <TimerItem
        timer={timeLeft.days}
        value={timeLeft.days > 1 ? "Days" : "Day"}
      />
      <TimerItem
        timer={timeLeft.hours}
        value={timeLeft.hours > 1 ? "Hours" : "Hour"}
      />
      <TimerItem
        timer={timeLeft.minutes}
        value={timeLeft.minutes > 1 ? "Minutes" : "Minute"}
      />
      <TimerItem
        timer={timeLeft.seconds}
        value={timeLeft.seconds > 1 ? "Seconds" : "Second"}
      />
    </div>
  );
}

function TimerItem({ timer, value }: { timer: any; value: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src={frame}
        alt="peje"
        className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] frame"
      />
      <div className="absolute flex flex-col items-center justify-center">
        <div className="text-[30px] lg:text-[54px] futurapt font-medium leading-tight">
          {timer}
        </div>
        <div className="text-[14px] lg:text-[15px]">{value}</div>
      </div>
    </div>
  );
}
