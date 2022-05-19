/* eslint-disable jsx-a11y/anchor-has-content */
import { Tooltip } from '@mui/material';
import React from 'react';

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
				(item, index) => (
					// eslint-disable-next-line jsx-a11y/anchor-has-content
					<Tooltip title={item.toUpperCase()} placement="left">
						<a
							href={`#${item}`}
							key={item + index}
							className={`app__navigation-dot ${
								active === item && 'active-dot'
							}`}
							style={active === item ? { backgroundColor: '#313bac' } : {}}
						/>
					</Tooltip>
				)
			)}
		</div>
	);
};

export default NavigationDots;
