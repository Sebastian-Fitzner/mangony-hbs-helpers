/**
 * Represents a helper to concat strings.
 *
 * @author Sebastian Fitzner
 */

module.exports = (...args) => args.slice(0, -1).join('');