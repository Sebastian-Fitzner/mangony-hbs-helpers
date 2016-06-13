/**
 * Represents a helper to use markdown files and return HTML.
 *
 * @author Sebastian Fitzner
 */

var fs = require('fs');
var md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
});
var mda = require('markdown-it-attrs');
var mdnh = require('markdown-it-named-headers');

md.use(mdnh).use(mda);

module.exports = function markdown(path) {
	var content = fs.readFileSync(path, 'utf-8');

	return md.render(content);
};