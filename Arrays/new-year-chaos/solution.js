// the solution is faster because it can avoid
// all array manipulation methods, since no array is actually returned
// and the array itself does not affect the outcome
function minimumBribes(q) {
  let total = 0;
  // track the minimum value
  // this works, but I can't remember why this is the approach to use?
  let min = q.length;

  // reverse loops are faster :shrug:
  for (let i = q.length - 1; i >= 0; i -= 1) {
    // imagine: 1 2 3 4 5 10 6 7 8 9
    if (q[i] - i > 3) {
      return 'Too chaotic';
    }
    // current item is greater than it's index, meaning bribe(s) occurred
    if (q[i] > i + 1) {
      // subtract index (1-based, not 0) from value (1-based, not 0)
      // to retrieve number of positions / bribes
      total += q[i] - (i + 1);
      // reset min to current value if it is greater
    } else if (min > q[i]) {
      min = q[i];
      // if current value is not equal to min value
      // increment number of bribes
    } else if (q[i] !== min) {
      total += 1;
    }
  }
  return total;
}

module.exports = minimumBribes;
