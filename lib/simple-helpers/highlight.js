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
	if (!lang) return console.warn('You need to pass a language to the highlight block helper!');

	var codeblock = block.fn(this).replace(/^\s+/, '');
	var originblock = lang === 'html' ? codeblock.replace(/</gi, '&lt;').replace(/>/gi, '&gt;') : codeblock;
	var content = '<pre><code class="hljs ' + lang + '" data-code-rendered="true">' + hljs.highlight(lang, codeblock).value + '</code></pre>';

	if (block.hash.escapeHTML === true) originblock = originblock.replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
	if (block.hash.origin === true) content = content + '<pre><code class="hljs ' + lang + ' is-hidden is-code-origin" data-code-origin="true">' + originblock + '</code></pre>';

	return content;
};