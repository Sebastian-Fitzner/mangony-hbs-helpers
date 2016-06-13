/*
 * Syntax helper.
 *
 * @return encoded html entities
 */
module.exports = function syntax(context) {
	var content = context.fn(this).replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
	return content;

};
