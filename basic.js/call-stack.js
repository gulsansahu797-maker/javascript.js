 // Call Stack // 
 // The Call Stack is a mechanism that manages function calls in JavaScript. Whenever a function is called, it is added to the stack. When the function finishes, it is removed.


 
function one() {
    console.log("Function One");
    two();
}

function two() {
    console.log("Function Two");
    three();
}

function three() {
    console.log("Function Three");
}

one();  // output : Function one , function two, function three. 

// LIFO stands for Last In, First Out.
 // The last function pushed onto the stack is the first function popped.

 Push Order:
one() → two() → three()

Pop Order:
three() → two() → one() 

// Call Stack and Execution Context
An Execution Context is the environment in which JavaScript code is executed.

// let username = "Gulsan";

function greet() {
    console.log("Hello " + username);
}

greet();
 //        there are two impt type ;
 //  1)  Global Execution Context (GEC) = The Global Execution Context is created when a JavaScript program starts running.

var name = "Gulsan";
let age = 20;

function greet() {
    console.log("Hello Gulsan");
}

console.log(name);
greet();  // output: Gulsan, hello gulsan 




 // 2) Function Execution Context (FEC) = A Function Execution Context is created whenever a JavaScript function is called.


function add(a, b) {
    let result = a + b;
    return result;
}

let answer = add(10, 20);

console.log(answer); // output : 30.


// Two Phases of Execution Context
// 

// 1: Memory Creation Phase
// - JavaScript prepares memory for variables and functions.
// - var variables are initialized with undefined.
// - let and const bindings are created but remain uninitialized until their declarations execute.
// - Function declarations are stored so they can be called.

//  2: Code Execution Phase
// - JavaScript executes statements.
// - Variables receive their assigned values.
// - Functions are called.
// - Calculations are performed.

// Call Stack with Nested Functions

function first() {
    console.log("First Start");

    second();

    console.log("First End");
}

function second() {
    console.log("Second Start");

    third();

    console.log("Second End");
}

function third() {
    console.log("Third");
}

first(); // output : First st, second st, third, second end, first end.

// Call Stack and Asynchronous =The Call Stack is also important for understanding asynchronous JavaScript.

console.log("Start");

setTimeout(function () {
    console.log("Timer");
}, 1000);

console.log("End"); // output: st,end, timer.





 
