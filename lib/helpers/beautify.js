/**
 * Represents a helper to prettify your HTML with js-beautify.
 *
 * @author Sebastian Fitzner
 */
var beautifyHTML = require('js-beautify').html;
var options = {
	"indent_size": 4,
	"indent_char": "    ",
	"eol": "\n",
	"indent_level": 0,
	"indent_with_tabs": true,
	"preserve-newlines": true,
	// "no-preserve-newlines": true,
	"max_preserve_newlines": 0,
	"wrap_line_length": 0,
	"wrap_attributes": "auto",
	"wrap_attributes_indent_size": 4,
	"end_with_newline": false
};
/*
 * @return String
 */
module.exports = function beautifyHTML(content) {
	return beautifyHTML(content.fn(this), options).replace(/(\n|\r){2,}/g, '\n');
};
