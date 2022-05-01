import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AnimakitExpander from 'animakit-expander';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [somethingToSay, setSomethingToSay] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: 'contact',
			name: formData.username,
			email: formData.email,
			message: formData.message,
		};

		client
			.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const toggleSomethingToSay = (e) => {
		console.log(e.target.value);
		setSomethingToSay(e.target.value);
	};
	console.log(somethingToSay);

	return (
		<>
			{!isFormSubmitted && (
				<h2 className="head-text">Take a coffee & chat with me</h2>
			)}

			<div className="app__footer-cards">
				<div className="app__footer-card ">
					<img src={images.email} alt="email" />
					<a href="mailto:omar987@hotmail.co.uk" className="p-text">
						omar987@hotmail.co.uk
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="phone" />
					<a href="tel:+447719463462" className="p-text">
						+447719463462
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className="app__footer-form">
					<div>
						<input
							className="p-text"
							type="text"
							placeholder="Your Name"
							name="username"
							value={username}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<input
							className="p-text"
							type="email"
							placeholder="Your Email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<FormControl style={{ padding: '1rem 0 0 1rem' }}>
						<FormLabel id="got-something-else-to-say">
							Got something more to say?
						</FormLabel>
						<RadioGroup
							row
							value={somethingToSay}
							onChange={toggleSomethingToSay}
							aria-labelledby="got-something-else-to-say"
							name="row-radio-buttons-group"
						>
							<FormControlLabel value={true} control={<Radio />} label="Yes" />
							<FormControlLabel value={false} control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>

					<AnimakitExpander expanded={somethingToSay === 'true' ? true : false}>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name="message"
							onChange={handleChangeInput}
						/>
					</AnimakitExpander>

					<button type="button" className="p-text" onClick={handleSubmit}>
						{!loading ? 'Send Message' : 'Sending...'}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg'
);
