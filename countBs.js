var counter = 0;

function countBs(phrase) {
  if (phrase.length === 1) {
    if (phrase.charAt(0) === "B") {
      counter += 1;
    }
  } else {
    if (phrase.charAt(0) === "B") {
      counter += 1;
      countBs(phrase.slice(1,phrase.length));
    } else {
      countBs(phrase.slice(1,phrase.length));
    }
  }
  return counter;
}