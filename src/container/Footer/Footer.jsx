import React, { useEffect, useRef, useState } from 'react';
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
import ReactiveButton from 'reactive-button';

const Footer = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [buttonState, setButtonState] = useState('idle');
	const [moreToSay, setMoreToSay] = useState(false);

	const inputElement = useRef(null);

	const focusInput = () => {
		inputElement.current.focus();
	};

	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		name === 'message' && toggleMoreToSay(e);
	};

	const toggleMoreToSay = (e) => {
		if (e.target.value.length > 15) {
			setMoreToSay('true');
			setTimeout(focusInput, 10);
		} else {
			setMoreToSay('false');
			setTimeout(focusInput, 10);
		}
	};

	const onClickHandler = () => {
		setButtonState('loading');
		setTimeout(() => {
			if (!formData.username || !formData.email) {
				setButtonState('error');
			} else {
				handleSubmit();
				setButtonState('success');
			}
		}, 1000);
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

	return (
		<>
			{!isFormSubmitted && (
				<h2 className="head-text">Grab a coffee & chat with me</h2>
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
					<div>
						{moreToSay !== 'true' && (
							<input
								className="p-text"
								placeholder="Your Message"
								value={message}
								name="message"
								onChange={handleChangeInput}
								ref={inputElement}
								onFocus={(e) =>
									e.currentTarget.setSelectionRange(
										e.currentTarget.value.length,
										e.currentTarget.value.length
									)
								}
							/>
						)}
					</div>

					<AnimakitExpander expanded={moreToSay === 'true' ? true : false}>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name="message"
							onChange={handleChangeInput}
							ref={inputElement}
							onFocus={(e) =>
								e.currentTarget.setSelectionRange(
									e.currentTarget.value.length,
									e.currentTarget.value.length
								)
							}
						/>
					</AnimakitExpander>

					<ReactiveButton
						// className="p-text"
						onClick={onClickHandler}
						buttonState={buttonState}
						idleText={'Send Message'}
						loadingText={'Sending...'}
						successText={'Success'}
						errorText={'Error'}
						type={'button'}
						className={'p-text'}
						style={{ borderRadius: '10px', padding: '1rem 2rem ' }}
						outline={false}
						shadow={true}
						rounded={false}
						size={'small'}
						animation={true}
					/>
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
