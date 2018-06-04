/*
 * Returns a bool if this is the first element in a loop
 * Returns boolean
 *
 * @author Sebastian Fitzner
 */
module.exports = function isFirst(idx) {
	var first = parseInt(idx, 10);

	return first === 0;
};