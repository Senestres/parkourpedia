export default {
	categories: "forme de mouvement",
	tags: [
		"posts",
		"mouvement",
	],
	"layout": "layouts/post.njk",
	"permalink": "{{ lang }}/{{ 'mouvement' | t(lang) }}/{{ title | slugify }}/",
};