export default {
	name: 'experiences',
	title: 'Experiences',
	type: 'document',
	fields: [
		{
			name: 'type',
			title: 'Type',
			type: 'string',
		},
		{
			name: 'works',
			title: 'Works',
			type: 'array',
			of: [{ type: 'workExperience' }],
		},
	],
};
