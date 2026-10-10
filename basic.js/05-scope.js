// scope //
 // Scope defines where a variable or function can be accessed in your code.

 // There are three main types of scope in JavaScript:

// Global Scope = A variable declared outside a function or block is generally available 
// throughout the script, subject to its declaration and environment.

// let name = "Gulsan";

// function greet() {
//     console.log(name);
// }

// greet();
// console.log(name);

// Here, name is a global-scope variable, so it can be accessed inside and outside the function

// Function Scope = A variable declared with let or const inside a function can be accessed only inside that function.

// function greet() {
//     let message = "Hello World";
//     console.log(message);
// }

// greet();

// console.log(message); // Error
// Here, message is accessible inside greet(), but not outside it.

// Block Scope = A block is code written inside curly braces { }, 
// such as an if statement or a loop. Variables declared with let or const 
// inside a block are accessible only within that block.

// if (true) {
//     let age = 20;
//     const city = "Bhopal";

//     console.log(age);
//     console.log(city);
// }

// console.log(age); // Error

// Here, age and city are accessible only inside the if block.

// let x = 10;

// function test() {
//     let y = 20;

//     console.log("Inside function:");
//     console.log(x);
//     console.log(y);
// }

// test();

// console.log("Outside function:");
// console.log(x);

// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }
// console.log(a);

// nested scopes.

// function one(){
//     const username = "gulsan kumar"

//     function two(){
//         const website = "youtude"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }

// lexical scop.
// Lexical scope means a function can
//  access variables from the scope in which it was defined.
// function outer() {
//     let message = "Hello";

//     function inner() {
//         console.log(message);
//     }

//     inner();
// }

// outer();  // Output: hello

// nested scope

//Nested scope occurs when one scope exists inside another scope.
// let a = 10;

// function outer() {
//     let b = 20;

//     function inner() {
//         let c = 30;
//         console.log(a, b, c);
//     }

//     inner();
// }

// outer(); //Output: 10 20 30

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

// Execution Context = An execution context is the environment in which JavaScript code is evaluated and executed.

// 3 Types of Execution Context

//1) Global Execution Context (GEC) = When JavaScript starts running a script, it creates a Global Execution Context.
// let name = "Gulsan";
// let age = 20;

// console.log(name);
// console.log(age); //output: gulsan ,20

//2)2. Function Execution Context = Whenever a function is called, JavaScript creates a new function execution context for that call.
//  let a = 10;

// function add() {
//     let b = 20;
//     console.log(a + b);
// }

// add();  output: 30

//3) Eval Execution Context (created when code runs through eval(); rarely used in normal development)

// the Call Stack =The call stack keeps track of which execution contexts are currently active.
// function first() {
//     second();
//     console.log("First");
// }

// function second() {
//     console.log("Second");
// }

// first(); output: Second , First.

// Memory Creation Phase =The Memory Creation Phase is the first phase of the Global Execution Context. During this phase, JavaScript prepares memory for variables and functions before executing the code.

// 1. Memory Creation Phase — prepares memory and bindings.
// 2. Execution Phase — executes code and assigns values.

// Example of Memory Creation Phase
// let name = "Gulsan";
// var age = 20;

// function greet() {
//     console.log("Hello");
// }

// console.log(name);
// console.log(age);
// greet();

// impt = let and const are not initialized to undefined. They cannot be accessed before their declarations are initialized.

// 2) Execution Phase = JavaScript executes the statements in order.
// let name = "Gulsan";
// var age =l 20;

// function greet() {
//     console.log("Hello");
// }

// console.log(name);
// console.log(age);
// greet();  output: gulsan,20, hello.
