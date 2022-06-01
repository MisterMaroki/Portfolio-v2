export default {
	name: 'files',
	title: 'Files',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			title: 'Cv',
			name: 'cv',
			type: 'file',
		},
	],
};
