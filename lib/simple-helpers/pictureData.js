/*
 * Picture Data helper.
 * Returns an object with the images you provided as param.
 *
 *
 * @Author Sebastian Fitzner
 *
 * @param {Array} data - Pictures JSON file
 * @param {Array} name - Names of the image presets
 * @param {Object} content - Inner content of content
 *
 * @return object
 */
module.exports = function pictureData(data, names, content) {
	if (!data) return;

	var picData = names.map(function (name) {
		var obj = {
			"presetName": name,
			"data": createPictureData(data, name)
		};

		return obj;
	});

	return content.fn(picData);
};

function createPictureData(data, name) {
	var arr = [];
	var content = data.filter(function (key) {
		return key[name];
	});

	var picData = content[0][name].filter(function (item) {

		if (arr.indexOf(item.breakpoint) === -1) {
			arr.push(item.breakpoint);

			return true;
		}

		return false;
	});

	return picData;
};