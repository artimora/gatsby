import { useEffect, useState } from "react";

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function getTimeParts(target: Date): TimeParts {
  const diff = target.getTime() - Date.now();
  const remaining = Math.max(diff, 0);

  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
    isPast: diff <= 0,
  };
}

function formatPart(value: number) {
  return value.toString().padStart(2, "0");
}

export default function TimeDiff({ time }: { time: Date }) {
  const [timeParts, setTimeParts] = useState<TimeParts>(() =>
    getTimeParts(time)
  );

  useEffect(() => {
    setTimeParts(getTimeParts(time));

    const intervalId = setInterval(() => {
      setTimeParts(getTimeParts(time));
    }, SECOND);

    return () => clearInterval(intervalId);
  }, [time]);

  if (timeParts.isPast) {
    return <p>reached</p>;
  }

  const countdown = [
    `${timeParts.days}d`,
    `${formatPart(timeParts.hours)}h`,
    `${formatPart(timeParts.minutes)}m`,
    `${formatPart(timeParts.seconds)}s`,
  ].join(" ");

  return <span>{countdown}</span>;
}
