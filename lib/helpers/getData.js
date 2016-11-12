/*
 * Get Data Helper
 * Returns a specific data object from data context
 *
 * @author Sebastian Fitzner
 */
module.exports = function getData(obj) {
	var prefix = obj.hash.typeof === 'partial' || obj.hash.typeof === 'layout' ? '__' + obj.hash.typeof + 's' : obj.hash.typeof + 's';
	var context = obj.data.root[prefix][obj.hash.from];

	return obj.fn(context);
};