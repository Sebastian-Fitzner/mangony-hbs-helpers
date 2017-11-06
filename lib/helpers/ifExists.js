var fs = require('fs');

function fileExists(filepath) {
	var fileOrFolder = fs.statSync(filepath);

	return fileOrFolder.isFile();
}

module.exports = function ifExists(path, context) {
	if (fileExists(path)) {
		return context.fn(this);
	} else {
		return context.inverse(this);
	}
};