var fs = require('fs');

module.exports = ifExists;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('ifExists', ifExists);
};

function fileExists(filepath) {
	try {
		return fs.statSync(filepath).isFile();
	}
	catch (err) {
		return false;
	}
}

function ifExists(path, context) {
	if (fileExists(path)) {
		return context.fn(this);
	} else {
		return context.inverse(this);
	}
}