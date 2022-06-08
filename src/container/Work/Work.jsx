import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

import './Work.scss';
import WorkCard from './WorkCard';
const Work = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);

	useEffect(() => {
		const query = '*[_type=="works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);
			console.log(item);
			item === 'All'
				? setFilterWork(works)
				: setFilterWork(works.filter((work) => work.tags.includes(item)));
		}, 500);
	};

	return (
		<>
			<h2 className="head-text">
				Latest <span>Projects </span>
				<br />
				Section
			</h2>

			<div className="app__work-filter">
				{['Firebase', 'React', 'Next', 'Downloadable', 'All'].map(
					(item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`app__work-filter-item app__flex p-text ${
								activeFilter === item ? 'item-active' : ''
							}`}
						>
							{item}
						</div>
					)
				)}
			</div>
			<motion.div
				className="app__work-portfolio"
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
			>
				{filterWork.map((work, index) => (
					<WorkCard work={work} index={index} />
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, 'app__works'),
	'work',
	'app__primarybg'
);
