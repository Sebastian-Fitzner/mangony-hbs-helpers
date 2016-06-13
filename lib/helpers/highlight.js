var hljs = require('highlight.js');

/**
 * Highlight code snippets with Highlight.js.
 *
 * @param {String} lang - Language
 * @param {String} block - Content as block
 *
 * @author Sebastian Fitzner
 */
module.exports = function highlight(lang, block) {
	if(!lang) return console.warn('You need to pass a language to the highlight block helper!');

	var content = '<pre><code class="hljs ' + lang + '">' + hljs.highlight(lang, block.fn(this)).value + '</code></pre>';

  return content;
};