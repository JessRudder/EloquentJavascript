// Given a number, output a square made of # and " " that looks like a checkerboard

var squareSize = prompt("How big would you like this board to be?");
var board = "";

for (var counter = 0; counter < squareSize; counter++) {
  var currentLine = "";
  for (var strLength = 0; strLength < squareSize; strLength++) {
    if (counter % 2 === 0) {
      if (strLength % 2 === 0) {
        currentLine += " ";
      } else {
        currentLine += "#";
      }
    } else {
      if (strLength % 2 === 0) {
        currentLine += "#";
      } else {
        currentLine += " ";
      }  
    }
  }
  board += currentLine + "\n";
}