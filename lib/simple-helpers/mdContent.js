/**
 * Represents a helper to use markdown files and return HTML.
 *
 * @author Sebastian Fitzner
 */

var md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
});
var mda = require('markdown-it-attrs');
var mdnh = require('markdown-it-named-headers');

md.use(mdnh).use(mda);

module.exports = function mdContent(content) {
	return md.render(content);
};