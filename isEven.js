function isEven(num) {
  if (Math.abs(num) === 0) {return true;}
  else if (Math.abs(num) === 1) {return false;}
  else {return isEven(Math.abs(num-2));}
}