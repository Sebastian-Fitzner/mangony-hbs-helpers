/*
 * Flatten object to array
 * Returns array
 *
 * @author Sebastian Fitzner
 */
module.exports = objToArr;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('objToArr', objToArr);
};

function objToArr(obj, block) {
	var arr = Object.keys(obj).map(function (key) {
		return obj[key]
	});

	return block.fn(arr);
}
