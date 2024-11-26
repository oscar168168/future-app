"use client";
import { useState, useEffect } from "react";

type OrdinalSuffix = "st" | "nd" | "rd" | "th";

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getOrdinalSuffix = (day: number): OrdinalSuffix => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatDate = (date: Date): string => {
    const months: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day: number = date.getDate();
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();

    return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
  };

  return (
    <div className="w-fit fixed right-0 font-[family-name:var(--font-geist-sans)] z-50">
      <div className="lg:p-6 p-3 text-right">
        <p className="lg:text-base font-semibold">
          {time.toLocaleTimeString()}
        </p>
        <p className="lg:text-sm text-xs font-normal"> {formatDate(time)}</p>
      </div>
    </div>
  );
};

export default Clock;
