// check for different approaches
function hourglassSum(arr) {
  let max = null;
  const limit = arr.length - 2;

  for (let j = 0; j < limit; j += 1) {
    for (let i = 0; i < limit; i += 1) {
      const top = arr[j][i] + arr[j][i + 1] + arr[j][i + 2];
      const middle = arr[j + 1][i + 1];
      const bottom = arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2];
      const sum = top + middle + bottom;
      // check null, not falsey, so that negative values replace null
      if (max === null || sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

export default hourglassSum;
