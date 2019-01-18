/**
 *
 * Define the
 *
 * Initial values
 *
 */

const getRandomValue = function() {
  return Math.floor(Math.random() * (max - (min + 1)) + min);
};

let min = 1,
  max = 10,
  winningNum = getRandomValue();

export { min, max, winningNum };
