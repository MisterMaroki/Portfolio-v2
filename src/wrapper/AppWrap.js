import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />

				<div className="app__wrapper app__flex">
					<Component />

					<div className="copyright">
						<p className="p-text">©2022 OMAR MAROKI</p>
						<p className="p-text">ALL RIGHTS RESERVED</p>
					</div>
				</div>
				{
					<NavigationDots
						style={{ position: 'fixed', top: '50%', right: '1rem' }}
						active={idName}
					/>
				}
			</div>
		);
	};

export default AppWrap;
