// import React, { createContext, useContext, useState } from 'react';

// const Nav = createContext();

// const NavContext = ({ Component }) => {
// 	const [first, setFirst] = useState(5);

// 	const ref = useRef();
// 	const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visible
// 	// const inViewport = useIntersection(ref, '-200px'); // Trigger if 200px is visible from the element

// 	if (inViewport) {
// 		console.log('in viewport:', ref.current);
// 	}

// 	return (
// 		<NavContext.Provider value={first}>{<Component />}</NavContext.Provider>
// 	);
// };

// const NavState = () => {
// 	return useContext(Nav);
// };

// export default NavContext;
