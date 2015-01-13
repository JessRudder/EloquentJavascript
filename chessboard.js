// Given a number, output a square made of # and " " that looks like a checkerboard

var squareSize = prompt("How big would you like this board to be?");
var board = "";

var checkEven = function(x) {
  return x%2 === 0;
};

for (var counter = 0; counter < squareSize; counter++) {
  var currentLine = "";
  for (var strLength = 0; strLength < squareSize; strLength++) {
    if (checkEven(counter)) {
      if (checkEven(strLength)) {
        currentLine += " ";
      } else {
        currentLine += "#";
      }
    } else {
      if (checkEven(strLength)) {
        currentLine += "#";
      } else {
        currentLine += " ";
      }  
    }
  }
  board += currentLine + "\n";
}
