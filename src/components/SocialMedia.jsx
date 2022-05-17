import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
const SocialMedia = () => {
	return (
		<div className="app__social">
			<a
				href="https://github.com/MisterMaroki"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconButton>
					<GitHubIcon />
				</IconButton>
			</a>
			<a
				href="https://www.linkedin.com/in/omarmaroki/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconButton>
					<LinkedInIcon />
				</IconButton>
			</a>
			<a
				href="mailto:omar.maroki@outlook.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconButton>
					<EmailOutlined />
				</IconButton>
			</a>
		</div>
	);
};

export default SocialMedia;
