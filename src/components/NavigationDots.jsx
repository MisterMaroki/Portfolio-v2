/* eslint-disable jsx-a11y/anchor-has-content */
import { Tooltip } from '@mui/material';
import React from 'react';
import { capitalize } from '../utils/capitalize';

const NavigationDots = ({ active, idName }) => {
	console.log(active === idName);
	return (
		<div className="app__navigation">
			{['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
				(item, index) => (
					<Tooltip title={capitalize(item)} placement="left">
						<a
							href={`#${item}`}
							key={item + index}
							className={`app__navigation-dot ${
								active === item ? 'active-dot' : 'inactive-dot'
							}`}
						/>
					</Tooltip>
				)
			)}
		</div>
	);
};

export default NavigationDots;
