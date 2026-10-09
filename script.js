// Learn about Factory function..................

// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk: function () {
//       console.log(
//         `Hello, my name is ${this.name} and I am ${this.age} years old.`,
//       );
//     },
//   };
//   return person;
// }

// let person1 = PersonMaker("Alice", 30);
// person1.talk(); // Output: Hello, my name is Alice and I am 30 years old.
// let person2 = PersonMaker("Bob", 25);
// person2.talk(); // Output: Hello, my name is Bob and I am 25 years old.

// Constructor - doesn't return anything, it just creates an object. and it uses the 'new' keyword to create an instance of the object.and it uses the 'this' keyword to refer to the object being created.and start with capital letter

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk=function(){
// 		console.log("Hi, my name is ", this.name);
// 		}

// 		let p1= new Person("adam", 22)'
// 		let p2= new Person("bob", 25)'

// ii.	function PersonMaker(name, age){
// 	const person={
// 	name:name,
// 	age:age,
// 	talk(){
// 	console.log("hi, my name is ", this.name)};
// 	}
// 	 return person;
// 	}

// Person.prototype.talk=function(){
// console.log("Hi, my name is ", this.name);
// }

// let p1= new Person("adam", 22)'
// let p2= new Person("bob", 25)'

// learn about "classes" in js

// class Person {
//   constructor(name, age) {
//     ((this.name = name), (this.age = age));
//   }
//   talk() {
//     console.log(`HI, my name is ${this.name}`);
//   }
// }

// let p1 = new Person("adma", 25);
// let p2 = new Person("eva", 37);

// Learn about "Inheritance".......................

// i eg =>
// class Person {
//   constructor(name, age) {
//     console.log("Person class constructor");
//     ((this.name = name), (this.age = age));
//   }
//   talk() {
//     console.log(`Hi I am ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, marks) {
//     console.log("student class constructor ");
//     super(name, age); // parents class constructor is called using super keyword
//     this.marks = marks;
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     console.log("Teacher class constructor");
//     super(name, age); // parents class constructor is called using super keyword
//     this.subject = subject;
//   }
// }
// let teacher1 = new Teacher("Mr. khan", 24, "Maths and English Grammer");

// ii eg =>
// class Mammal {
//   constructor(name) {
//     this.name = name;
//     this.type = "warm-blooded";
//   }
//   eat() {
//     console.log("I am eating");
//   }
// }

// class Dog extends Mammal {
//   constructor(name) {
//     super(name);
//     console.log("Hi I am a dog and my name is ", this.name);
//   }
//   bark() {
//     console.log("woof woof");
//   }
// }
// class cat extends Mammal {
//   constructor(name) {
//     super(name);
//     console.log("Hi I am a cat and my name is ", this.name);
//   }
//   meow() {
//     console.log("meow meow");
//   }
// }

// let d = new Dog("buddy");
// let c = new cat("whiskers");

// let Car = function (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.showDetails = function () {
//     console.log(
//       `car brand is ${this.brand} and  modeld is ${this.model} and price is ${this.price}`,
//     );
//   };
// };

// let car1 = new Car("BMW", "XS", 5000000);
// let car2 = new Car("XUV", "700", 3000000);
// car1.showDetails();
// car2.showDetails();



// let Car = function(brand){
//   this.brand = brand;

//   this.showDetails = function () {
//     console.log(this.brand);
//   }
// };

// let car1 = new Car("BMW");
// car1.showDetails();