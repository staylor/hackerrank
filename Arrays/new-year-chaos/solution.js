// the solution is faster because it can avoid
// all array manipulation methods, since no array is actually returned
function minimumBribes(q) {
  if (q.length < 2) {
    return '';
  }

  let total = 0;
  let min = q.length;
  for (let i = q.length - 1; i >= 0; i -= 1) {
    const current = q[i];
    if (current - i > 3) {
      return 'Too chaotic';
    }
    if (current > i + 1) {
      total += current - (i + 1);
    } else if (min > current) {
      min = current;
    } else if (current !== min) {
      total += 1;
    }
  }
  return total;
}

module.exports = minimumBribes;
