import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
	if (window.location.href.endsWith('sanity'))
		window.location.href =
			'https://portfolio-backend-mistermaroki.vercel.app/desk';

	return (
		<div className="app" id="home">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default App;
