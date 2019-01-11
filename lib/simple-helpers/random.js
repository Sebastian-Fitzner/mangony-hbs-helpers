module.exports = random;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('random', random);
};

/**
 * Random number helper.
 *
 * @return random number
 */
function random() {
	return Math.floor(Math.random() * 1001);
}
