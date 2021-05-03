function rotLeft(a, d) {
  for (let i = d; i > 0; i -= 1) {
    // eslint-disable-next-line prefer-destructuring
    a[a.length] = a[0];
    // is shift or splice faster?
    // a.splice(0, 1);
    a.shift();
  }
  return a;
}

module.exports = rotLeft;
