import { useEffect, useState } from "react";

const A_DAY = 86400000;

function getDayProgress(): number {
  const now = new Date().getTime();
  const day = new Date().setHours(0, 0, 0, 0);
  const timeOnTheDay = now % day;
  return timeOnTheDay / A_DAY;
}

export function useColorByDayProgress(): string {
  const [dayProgress, setDayProgress] = useState<number>(getDayProgress);

  useEffect(function () {
    const intervalId = setInterval(function () {
      setDayProgress(getDayProgress());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return `hsl(${Math.floor(dayProgress * 360)},50%,50%)`;
}
