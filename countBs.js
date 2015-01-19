function countBs(phrase) {
  counter = 0;
  if (phrase.length === 1) {
    if (phrase.charAt(-1) === "B") {
      counter += 1;
      return counter;
    } else {
      return counter;
    }
  } else {
    if (phrase.charAt(-1) === "B") {
      counter += 1;
      countBs(phrase.slice(0,-1));
    } else {
      countBs(phrase.slice(0,-1));
    }
  }
}