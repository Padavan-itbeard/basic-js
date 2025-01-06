const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const hash = n.toString();
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < hash.length; i += 1) {
    const cur = parseInt(hash.slice(0, i) + hash.slice(i + 1));

    if (cur > max) {
      max = cur;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
