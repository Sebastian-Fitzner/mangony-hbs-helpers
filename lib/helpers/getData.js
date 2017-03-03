/*
 * Get Data Helper
 * Returns a specific data object from data context
 *
 * @author Sebastian Fitzner
 */
module.exports = function getData(obj) {
	var prefix = obj.hash.typeof + 's';
	var context = {};

	if (obj.hash.typeof === 'partial' || obj.hash.typeof === 'layout') {
		prefix = '__' + obj.hash.typeof + 's';
		context = obj.data.root[prefix][obj.hash.from];
	} else if (obj.hash.typeof === 'data') {
		context = obj.data.root[obj.hash.from];
	} else {
		context = obj.data.root[prefix][obj.hash.from];
	}

	return obj.fn(context);
};