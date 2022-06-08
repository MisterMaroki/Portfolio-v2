import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor } from '../../client';
import { HiX } from 'react-icons/hi';
import { fontSize } from '@mui/system';
import { IconButton } from '@mui/material';
const WorkCard = ({ work, index }) => {
	const [open, setOpen] = useState(false);
	console.log('🚀 ~ file: WorkCard.jsx ~ line 7 ~ WorkCard ~ open', open);
	document
		.getElementById('home')
		.addEventListener('click', () => setOpen(false));
	return (
		<>
			<motion.div
				transition={{ layout: { duration: 0.25, type: 'easeInOut' } }}
				className={`app__work-item app__flex ${open && 'expand'}`}
				key={index}
				onClick={() => setOpen(!open)}
			>
				<motion.div className="app__work-img app__flex">
					{work.imgUrl && <img src={urlFor(work.imgUrl)} alt={work.name} />}

					<motion.div
						whileHover={{ opacity: open ? 1 : [0, 1] }}
						transition={{
							duration: 0.25,
							ease: 'easeInOut',
							staggerChildren: 0.5,
						}}
						className="app__work-hover app__flex"
					>
						<motion.a href={work.projectLink} target="_blank" rel="noreferrer">
							<motion.div
								whileInView={{ scale: [0, 1] }}
								whileHover={{ scale: [1, 0.9] }}
								transition={{
									duration: 0.25,
								}}
								className="app__flex"
							>
								<AiFillEye />
							</motion.div>
						</motion.a>
						<motion.a href={work.codeLink} target="_blank" rel="noreferrer">
							<motion.div
								whileInView={{ scale: [0, 1] }}
								whileHover={{ scale: [1, 0.9] }}
								transition={{
									duration: 0.25,
								}}
								className="app__flex"
							>
								<AiFillGithub />
							</motion.div>
						</motion.a>
					</motion.div>
				</motion.div>
				<motion.div className="app__work-content app__flex">
					<motion.h4 className="bold-text">{work.title}</motion.h4>
					{open && (
						<motion.p className="p-text" style={{ marginTop: 10 }}>
							{work.description}
						</motion.p>
					)}

					<motion.div className="app__work-tag app__flex">
						<motion.p className="p-text">
							{work.tags &&
								work.tags
									?.toString()

									.split(',')
									.join(' ')}
						</motion.p>
					</motion.div>
				</motion.div>
				{open && (
					<IconButton className="svg-container">
						{' '}
						<HiX onClick={() => setOpen(false)} />
					</IconButton>
				)}
			</motion.div>
		</>
	);
};

export default WorkCard;
