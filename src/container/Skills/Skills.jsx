import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import ReactiveButton from 'reactive-button';

const Skills = () => {
	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);
	const [cv, setCv] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';
		const fileQuery = `*[_type == 'files'] {
			title,
			
			cv,
			"cvURL": cv.asset->url
		  }`;

		client.fetch(query).then((data) => {
			setExperiences(data);
		});

		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
		client.fetch(fileQuery).then((data) => {
			setCv(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">Skills & Experiences</h2>

			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}
						>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img src={urlFor(skill.icon)} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<div className="app__skills-exp">
					{experiences.map((experience) => (
						<motion.div
							className="app__skills-exp-item"
							key={`${experience.type}-${Math.random()}`}
						>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.type}</p>
							</div>
							<motion.div
								className="app__skills-exp-works"
								key={`${experience.type}-${Math.random()}`}
							>
								{experience.works.map((work, index) => (
									<div id="work-outer">
										<ReactTooltip
											id={work.name}
											effect="solid"
											arrowColor="#fff"
											className="skills-tooltip"
											key={work.desc}
										>
											{work.desc}
										</ReactTooltip>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tip
											data-for={work.name}
											key={work.name}
										>
											<h4 className="bold-text">{work.name}</h4>
											<p className="p-text">{work.company}</p>
										</motion.div>
										{index === 0 && (
											<motion.div
												className="pointer"
												transition={{
													duration: 1.5,
													repeat: Infinity,
													repeatType: 'reverse',
													type: 'spring',
												}}
												whileInView={{
													opacity: [0.5, 0.8],
													// width: [30, 60],
													// height: [30, 60],
													scale: [0.5, 1],
												}}
											/>
										)}
									</div>
								))}
							</motion.div>
						</motion.div>
					))}
					<a download href={cv[0]?.cvURL}>
						<ReactiveButton
							// className="p-text"

							idleText={'Link to CV'}
							loadingText={'Linking...'}
							successText={'Success'}
							errorText={'Error'}
							type={'button'}
							className={'p-text'}
							style={{
								borderRadius: '10px',
								padding: '1rem 2rem ',
								color: 'whitesmoke',
							}}
							outline={false}
							shadow={true}
							rounded={false}
							size={'small'}
							animation={true}
						/>
					</a>
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, 'app__skills'),
	'skills',
	'app__whitebg'
);
