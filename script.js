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

// function Student(name) {
//   this.name = name;
// }

// Student.prototype.sayHello = function () {
//   console.log("Hello " + this.name);
// };

// let s1 = new Student("Raquib");
// let s2 = new Student("Aman");

// s1.sayHello();
// s2.sayHello();

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }
// }

// let car1 = new Car("BMW");

// let car2 = new Car("AUDI");

// console.log(car1.brand);
// console.log(car2.brand);

// class Student {
//   constructor(name) {
//     this.name = name;
//   }
//   introduce() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// let student1 = new Student("John");
// let student2 = new Student("Jane");
// student1.introduce();
// student2.introduce();
// console.log(student1.introduce===student2.introduce);//true

// class Vehicle {
//   start() {
//     console.log(`Vehicle is starting`);
//   }
// }

// class Bike extends Vehicle {
//   start() {
//     console.log(`Bike is starting`);
//   }
// }

// let bike1 = new Bike();
// bike1.start();

// class Animal {
//   sound() {
//     console.log(`Animal sound`);
//   }
// }

// class Cat extends Animal {
//   sound() {
//     console.log(`Meow!`);
//   }
// }

// let cat1 = new Cat();
// cat1.sound();

// let animal= new Animal();
// animal.sound();

// class User {
//   #password = 12344;
//   showPassword() {
//     console.log(this.#password);
//   }
// }

// let user1 = new User();

// user1.showPassword();
// user1.#password; //

// class A {
//   show() {
//     console.log("dekha de bhai");
//   }
// }

// class B extends A {
//   show() {
//     console.log("kaa dikhayega gandu");
//   }
// }

// let a = new B();
// a.show();

// class Car {
//   static start() {
//     console.log("saterted");
//   }
// }

// Car.start();

// class Car {
//   start() {
//     console.log("started");
//   }
// }
// Car.start();

// class Mobile {
//   #price = 10000;
//   showPrice() {
//     console.log(this.#price);
//   }
// }

// let mobile1 = new Mobile();
// mobile1.showPrice();