export default {
	name: 'works',
	title: 'Works',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},

		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'projectLink',
			title: 'Project Link',
			type: 'string',
		},
		{
			name: 'codeLink',
			title: 'Code Link',
			type: 'string',
		},
		{
			name: 'imgUrl',
			title: 'ImageUrl',
			type: 'image',
			options: {
				hotspot: true,
			},
		},

		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [
				{
					name: 'tag',
					title: 'Tag',
					type: 'string',
				},
			],
		},
		{
			name: 'challenges',
			title: 'Challenges',
			type: 'array',
			of: [
				{
					name: 'challenge',
					title: 'Challenge',
					type: 'string',
				},
			],
		},
		{
			name: 'features',
			title: 'Features',
			type: 'array',
			of: [
				{
					name: 'feature',
					title: 'Feature',
					type: 'string',
				},
			],
		},
	],
};
