Methods
- properties that hold function values
- usually needs to do something with object it was called on
- when function called to do something on object, "this" points to the object it's called on.
  e.g. function speak(line) {
        console.log("The " + this.type + " rabbit says '" +line + "'");
       }

Apply and Call
- can be used to call the function it's a method of
- apply takes arguments as an array, call takes arguments normally

Functions are free-floating but methods are always attached to objects and only work on that object.


Prototypes
- Almost all objects have one
- A 'fallback object' that can be used if the object gets a request for a property it doesn't have
- individual objects contain properties that only apply to them, prototypes have the properties that apply to all of that type of object
- Create an object using a prototype:
  var protoRabbit = {
    speak: function(line) {
      console.log("The " + this.type + " rabbit says '" +
                  line + "'");
    }
  };
  var killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");

Constructors
- More convenient way of creating objects that inherit from a prototype
- Object created with 'new' is instance of a constructor
- Usually names of constructors are capitalized
  function Rabbit(type) {
    this.type = type;
  }

  var killerRabbit = new Rabbit("killer");
  var blackRabbit = new Rabbit("black");
- Once a constructor is made you can use prototypes to add methods to the constructor:
  Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" +
                line + "'");
  };

Overriding Derived Properties
- Adding a property to an object adds that property to the object itself
- If it already existed in the prototype, it will be overwritten.  Otherwise it will be added.
- The prototype will not be changed

Prototype Interference
- Stuff you put in the prototype can interfere with things you want to do with the object
  - e.g. something might be 'enumerable' so when you do an interation it will show up when it shouldn't
  - you can set the propert as non-enumerable as follows:

  Object.defineProperty(Object.prototype, "hiddenNonsense",
                      {enumerable: false, value: "hi"});

- Use hasOwnProperty to make sure it's part of the Object not part of a prototype

Prototype-Less Objects
- Use Object.create(null) to create objects without prototypes so all properties will be the objects own

Polymorphism
- 