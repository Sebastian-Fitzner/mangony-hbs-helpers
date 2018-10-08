/**
 * Represents a helper to use markdown files and return HTML.
 *
 * @author Sebastian Fitzner
 */

var fs = require('fs');
var hljs = require('highlight.js');
var md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true,
	highlight: function (str, lang) {+
		hljs.configure({
			tabReplace: '  ', // 2 spaces
		});
		if (lang && hljs.getLanguage(lang)) {
			try {
				return '<pre class="hljs"><code>' +
					hljs.highlight(lang, str, true).value +
					'</code></pre>';
			} catch (err) {
			}
		}

		return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	}
});
var mda = require('markdown-it-attrs');
var mdnh = require('markdown-it-named-headers');

md.use(mdnh).use(mda);

module.exports = {
	register: function (handlebars) {
		handlebars.registerHelper('markdown', function (path, block) {
				var content = fs.readFileSync(path, 'utf-8');
				var contextProp = block.hash.context || {};
				var context = Object.assign({
					rootContext: block.data.root
				}, contextProp);
				var regex = new RegExp('(?:\\[\\/\\/\\]\\:\\s#\\s+\\()(\\{\\{.+\\}\\})(?:\\))', 'gm');
				var matches = [];
				var match;

				while (match = regex.exec(content)) {
					matches.push({
						regex: match[ 0 ],
						data: match[ 1 ]
					});
				}

				matches.forEach(match => {
					content = content.replace(match.regex, match.data);
				});

				content = handlebars.compile(content, { preventIndent: true });

				return md.render(content(context));
			}
		);
	}
};
