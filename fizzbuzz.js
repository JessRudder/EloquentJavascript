// The classic FizzBuzz in JavaScript

for (var counter = 1; counter <= 100; counter++) {
  if (counter % 15 == 0) {
    console.log("FizzBuzz");
  } else if (counter % 3 == 0) {
    console.log("Fizz");
  } else if (counter % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(counter);
  }
}