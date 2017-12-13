var fs = require('fs');

function fileExists(filepath) {
	try {
		return fs.statSync(filepath).isFile();
	}
	catch (err) {
		return false;
	}
}

module.exports = function ifExists(path, context) {
	if (fileExists(path)) {
		return context.fn(this);
	} else {
		return context.inverse(this);
	}
};