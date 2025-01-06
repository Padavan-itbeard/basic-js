const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let isSorted = false;

  for (let i = 0; i < arr.length; i += 1) {
    while (arr[i] === -1 && i < arr.length) {
      i += 1;
    }

    let j = i + 1;

    while (arr[j] === -1 && j < arr.length) {
      j += 1;
    }

    if (arr[i] > arr[j]) {
      const t = arr[i];
      isSorted = true;

      arr[i] = arr[j];
      arr[j] = t;
    }
  }

  return isSorted ? sortByHeight(arr) : arr;
}

module.exports = {
  sortByHeight
};
