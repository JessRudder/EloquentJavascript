function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}