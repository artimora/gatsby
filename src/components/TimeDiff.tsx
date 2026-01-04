import { useEffect, useState } from "react";

type TimeData = {
	targetTime: number;
	currentTime: number;
	diffTime: number;
};

export default function TimeDiff({ time }: { time: Date }) {
	const [timeData, setTimeData] = useState<TimeData>({
		targetTime: time.getUTCDate(),
		currentTime: Date.now(),
		diffTime: Math.floor(
			(time.getUTCDate() - Date.now()) / (1000 * 60 * 60 * 24),
		),
	});

	useEffect(() => {
		setInterval(() => {
			const _MS_PER_DAY = 1000 * 60 * 60 * 24;

			const now = new Date(Date.now());

			const targetTime = Date.UTC(
				time.getFullYear(),
				time.getMonth(),
				time.getDate(),
				time.getHours(),
				time.getMinutes(),
				time.getSeconds(),
				time.getMilliseconds(),
			);

			const currentTime = Date.UTC(
				now.getFullYear(),
				now.getMonth(),
				now.getDate(),
				now.getHours(),
				now.getMinutes(),
				now.getSeconds(),
				now.getMilliseconds(),
			);

			setTimeData({
				targetTime,
				currentTime,
				diffTime: Math.floor((targetTime - currentTime) / _MS_PER_DAY),
			});
		}, 1);
	}, []);

	return (
		<>
			<p>targetTime: {timeData.targetTime}</p>
			<p>currentTime: {timeData.currentTime}</p>
			<p>diffTime: {timeData.diffTime}</p>
		</>
	);
}
