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
      const difference = targetDate.getTime() - Date.now();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        months: 0,
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
        value={timeLeft.months == 1 ? "Month" : "Months"}
      />
      <TimerItem
        timer={timeLeft.days}
        value={timeLeft.days == 1 ? "Day" : "Days"}
      />
      <TimerItem
        timer={timeLeft.hours}
        value={timeLeft.hours == 1 ? "Hour" : "Hours"}
      />
      <TimerItem
        timer={timeLeft.minutes}
        value={timeLeft.minutes == 1 ? "Minute" : "Minutes"}
      />
      <TimerItem
        timer={timeLeft.seconds}
        value={timeLeft.seconds == 1 ? "Second" : "Seconds"}
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
