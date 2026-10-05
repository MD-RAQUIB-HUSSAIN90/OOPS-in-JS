function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk: function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`,
      );
    },
  };
  return person;
}

let person1 = PersonMaker("Alice", 30);
person1.talk(); // Output: Hello, my name is Alice and I am 30 years old.
let person2 = PersonMaker("Bob", 25);
person2.talk(); // Output: Hello, my name is Bob and I am 25 years old.

// Constructor - doesn't return anything, it just creates an object. and it uses the 'new' keyword to create an instance of the object.and it uses the 'this' keyword to refer to the object being created.and start with capital letter

function Person(name, age) {
  this.name = name;
  this.age = age;
}

