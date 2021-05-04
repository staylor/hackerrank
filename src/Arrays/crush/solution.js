// Example inputs:
// a b k
// 1 5 3
// 4 8 7
// 6 9 1

// brute force solution:
// index-> 1 2 3  4  5 6 7 8 9 10
//       	[0,0,0, 0, 0,0,0,0,0, 0]
//       	[3,3,3, 3, 3,0,0,0,0, 0]
//       	[3,3,3,10,10,7,7,7,0, 0]
//       	[3,3,3,10,10,8,8,8,1, 0]

// optimized solution:
// 0 1 2 3 4 5  6 7 8  9 10 11 - index
// 0 3 0 0 0 0 -3 0 0  0  0  0 - 1st query
// 0 0 0 0 7 0  0 0 0 -7  0  0 - 2nd query
// 0 0 0 0 0 0  1 0 0  0 -1  0 - 3rd query
// 0 3 0 0 7 0 -2 0 0 -7 -1  0 - actual value
// sequence of sums: 3 10 8 1 0

function arrayManipulation(n, queries) {
  // create a zero-filled array
  const arr = Array(n + 2).fill(0);
  // eslint-disable-next-line no-restricted-syntax
  for (const [a, b, k] of queries) {
    // store the value of k in the first index only
    // if the value is already set, add to the previous
    arr[a] += k;
    // decrement the value of k from the index after the end index
    arr[b + 1] -= k;
  }

  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    // column values disappear on each iteration
    sum += arr[i];
    // simply check if it is greater than the last stored max
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

module.exports = arrayManipulation;
