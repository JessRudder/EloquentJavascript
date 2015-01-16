var original = prompt ("Enter a sentence.");

for(i = 0; i < original.length; i++) {
  var temp = original.slice(-1);
  var original = original.slice(0,-1);
  var original = temp + original;
  console.log(original);
}