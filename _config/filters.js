import { DateTime } from "luxon"; // deprecated
import { parse } from "@11ty/parse-date-strings";
import i18n from "../_data/i18n.json" with { type: "json" } ;

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, lang) => {
		const locale = i18n.locales.lang
		return dateObj.toLocaleDateString(locale, {year: "numeric", month: "long", day: "numeric"})
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj, lang) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return dateObj.toLocaleDateString(lang)
	});



	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortAlphabetically", strings =>
		(strings || []).sort((b, a) => b.localeCompare(a))
	);

	// Return only pages with same lang as current page
	eleventyConfig.addFilter("pageLang", function(value) {
		return value.filter(item => item.page.lang === this.page.lang)
	});
	// Fix i18l for pagination, use like this: | locale_links | fix_locale_links
	eleventyConfig.addFilter ("fix_locale_links", function(links, lang) {
		if (!this.ctx.pagination) { return links; }
		if (!lang) lang = this.page.lang || this.ctx.lang;
		const filtered = links.filter(item => item?.url?.endsWith(this.page.url.replace('/' + lang, '')));
		return filtered;
	});

	eleventyConfig.addFilter("t", function(key, lang) {
		if (!i18n[key]) {
			console.warn(`Missing translation key: ${key}`)
		};
  		lang = lang || this?.page?.lang || "fr"; 
  		return i18n[key]?.[lang] || key;
	});
	
};
