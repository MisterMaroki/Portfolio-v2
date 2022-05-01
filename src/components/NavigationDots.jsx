import React from 'react';

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
				(item, index) => (
					// eslint-disable-next-line jsx-a11y/anchor-has-content
					<a
						href={`#${item}`}
						key={item + index}
						className="app__navigation-dot"
						style={active === item ? { backgroundColor: '#313bac' } : {}}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;