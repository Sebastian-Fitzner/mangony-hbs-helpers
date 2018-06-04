/**
 * Created by sebastian.fitzner on 19.03.14.
 */

module.exports = function limit(from, to, context, content) {
	var item = "";
	for (var i = from, j = to; i < j; i++) {
		item = item + content.fn(context[i]);
	}
	return item;
};