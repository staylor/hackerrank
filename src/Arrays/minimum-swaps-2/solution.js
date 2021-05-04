function minimumSwaps(arr) {
  let swaps = 0;
  // iterate over the entire array
  for (let i = 0; i < arr.length; i += 1) {
    // items are zero-indexed
    // positions start at 1
    const position = i + 1;
    // if an item is out of place,
    // swap it with the one next to it
    // until it lands in the right spot
    while (arr[i] !== position) {
      const temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
      swaps += 1;
    }
  }
  return swaps;
}

export default minimumSwaps;
