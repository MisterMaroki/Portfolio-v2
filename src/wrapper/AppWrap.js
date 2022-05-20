import React, { useEffect, useRef, useState } from 'react';
import { NavigationDots, SocialMedia } from '../components';
import useOnScreen from '../utils/useOnScreen';
const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		const ref = useRef();
		const isVisible = useOnScreen(ref);
		const [state, setState] = useState('home');
		useEffect(() => {
			setState(ref.current.id);
		}, [isVisible]);

		return (
			<div id={idName} className={`app__container ${classNames}`} ref={ref}>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />

					<div className="copyright">
						<p className="p-text">©2022 OMAR MAROKI</p>
						<p className="p-text">ALL RIGHTS RESERVED</p>
					</div>
				</div>
				{state === idName && isVisible && (
					<NavigationDots active={state} idName={idName} />
				)}
			</div>
		);
	};

export default AppWrap;
