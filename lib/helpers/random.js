/**
 * Random number helper.
 *
 * @return random number
 */
module.exports = function random() {
	var randomnumber = Math.floor(Math.random() * 1001);
	return randomnumber;
};
