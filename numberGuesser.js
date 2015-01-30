var num = Math.floor((Math.random() * 100) + 1);

var guess = 0;

while (guess != num) {
  guess = prompt("Pick a number between 1 and 100");

  if (num > guess) {
    alert("The number is higher!");
  } else if (num < guess) {
    alert("The numberis lower!");
  } else {
    alert("You must have gotten it right!");
  }
};