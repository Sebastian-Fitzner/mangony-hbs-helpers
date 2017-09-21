var fs = require('fs');

function fileExists(filepath) {
	return fs.stat(filepath, function fsStat(err, fileOrFolder) {
		if (err) {
			if (err.code === 'ENOENT') {
				return false;
			}
		} else {
			return fileOrFolder.isFile();
		}
	});
}

module.exports = function ifExists(path, context) {
	if (fileExists(path)) {
		return context.fn(this);
	} else {
		return context.inverse(this);
	}
};