// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     logMe() {
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// const user1 = new User("Gulsan");

// user1.logMe();
// // Inheritance is an Object-Oriented Programming (OOP) 
// // concept that allows one class to inherit properties and methods from another class.

// // this keyword =
//  // Refers to the current object.

//  // prootype inheritance = An object can access properties and methods from another object through its prototype chain.
//  const User = {
//     logMe() {
//         console.log("Hello User");
//     }
// };

// const Teacher = Object.create(User);

// Teacher.logMe();  // output : HELLO USER .


// //Static Properties =
// // A static property can be accessed directly using the class name without creating an object.


// class User {
//     static company = "Google";

//     constructor(username) {
//         this.username = username;
//     }
// }

// const user1 = new User("Gulsan");

// console.log(User.company);
// console.log(user1.username);
// console.log(user1.company);
// // output : Google, Gulsan , undefined.

// // A static method is a method that belongs to a class rather than its instances.

// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     static createId() {
//         return 123;
//     }

//     logMe() {
//         console.log(`Username: ${this.username}`);
//     }
// }

// const user1 = new User("Gulsan");

// console.log(User.createId());
// user1.logMe();  // output : 123, Username: , Gulsan.

// // User.createId() works because createId() is static.
// user1.logMe() works because logMe() is an instance method.



// user1.createId() would produce a TypeError because the static method is not available directly on the instance


 // Bind // 
 // bind() allows us to control which object the this keyword refers to inside a function.
 
// const user = {
//     username: "Gulsan",
//     age: 20
// };

// function showDetails() {
//     console.log(`Username: ${this.username}`);
//     console.log(`Age: ${this.age}`);
// }

// const result = showDetails.bind(user);

// result();  // output : Username:Gulsan Age : 20,

// impt = bind() does not execute the function immediately. It returns a new function.

       // Since you are learning JavaScript classes, inheritance, and static methods,
       //  this example is useful.

// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     logMe() {
//         console.log(`Username is ${this.username}`);
//     }
// }

// const user1 = new User("Gulsan");

// const myFunction = user1.logMe.bind(user1);

// myFunction(); // output : Usename is Gulsan 



// Difference Between = call()
//  apply(), 
// and bind()


// const person = {
//     name: "Gulsan"
// };

// function greet(city, state) {
//     console.log(
//         `${this.name} lives in ${city}, ${state}`
//     );
// }

// // call()
// greet.call(person, "Singrauli", "MP");

// // apply()
// greet.apply(person, ["Singrauli", "MP"]);

// // bind()
// const newFunction = greet.bind(
//     person,
//     "Singrauli",
//     "MP"
// );

// newFunction(); // output//  Gulsan lives in Singrauli, MP 
// Gulsan lives in Singrauli, MP, Gulsan lives in Singrauli,MP.





