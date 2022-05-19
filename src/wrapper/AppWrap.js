import React, { useRef } from 'react';
import { NavigationDots, SocialMedia } from '../components';
import useOnScreen from './useOnScreen';
const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		const ref = useRef();
		const isVisible = useOnScreen(ref);

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
				{isVisible && <NavigationDots active={idName} />}
			</div>
		);
	};

export default AppWrap;
