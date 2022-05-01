import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.4 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I'm</p>
							<h1 className="head-text">Omar</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">Web Developer</p>
						<p className="p-text">Freelancer</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.4, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img src={images.profile} alt="profile_bg" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
					className="overlay_circle"
					src={images.circle}
					alt="profile_circle"
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
					className="overlay_circle hover-bg"
					src={images.volcano}
					alt="profile_circle_bg"
				/>
			</motion.div>
			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{['./logo192.png', images.redux, images.sass].map((circle, index) => (
					<div className="circle-cmp app__flex" key={`circle-${index}`}>
						<img src={circle} alt="circle" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');