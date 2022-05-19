import React, { useState, useEffect } from 'react';
const words = ['Developer', 'Programmer', 'Problem Solver. ✅'];

export default function TypeWriter() {
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [blink, setBlink] = useState(true);
	const [reverse, setReverse] = useState(false);
	const [finished, setFinished] = useState(false);
	// typeWriter
	useEffect(() => {
		if (index === words.length - 1 && subIndex === words[index].length) {
			setFinished(true);
			return;
		}

		if (
			subIndex === words[index].length + 1 &&
			index !== words.length - 1 &&
			!reverse
		) {
			setReverse(true);
			return;
		}

		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => prev + 1);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(0.1 * 350)));

		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse]);

	// blinker
	useEffect(() => {
		if (finished) return;
		const timeout2 = setTimeout(() => {
			setBlink((prev) => !prev);
		}, 500);
		return () => clearTimeout(timeout2);
	}, [blink]);

	return (
		<>
			<p className="p-text">
				{`${words[index].substring(0, subIndex)}${blink ? '|' : ''}`}
			</p>
		</>
	);
}
