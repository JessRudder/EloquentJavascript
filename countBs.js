function countBs(phrase, finStr) {
  if (finStr === undefined) {
   var finStr = ""; 
  }
  if (phrase.length === 1) {
    if (phrase.charAt(0) === "B") {
      debugger;
      finStr += phrase.charAt(0);
    }
  } else {
    if (phrase.charAt(0) === "B") {
      debugger;
      finStr += phrase.charAt(0);
      countBs(phrase.slice(1,phrase.length), finStr);
    } else {
      debugger;
      countBs(phrase.slice(1,phrase.length), finStr);
    }
  }
  return finStr.length;
}