// Control Flow // and switch 

// Control flow is the order in which JavaScript executes statements in a program.

// 1) Normal Control Flow  = JavaScript executes statements one by one.

// 2. Types of Control Flow in JavaScript

//a. Conditional Statements = Used to make decisions based on conditions.
// Examples: if, else, else if, switch.

// b) loops = used to repeat code while a condition is satisfied or for a specified number of iteration.
// example = for, while, do...while

// c) jump statements = used to change the normal flow of exacution.
// examples = break, continue,return.

// 3) Control Flow Using if...else.

 // Example: Check whether a person is old enough to vote.
//     let age = 20;

// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote yet");
// }  // output : you can vote.

// // 4) Control Flow Using a Loop =
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// } // output : 1,2,3,4,5.
// The loop repeats the statement until its condition becomes false.

// 5) 5. Control Flow Using switch =
// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Unknown day");
// } output: tuesday.

// The difference between normal flow and control flow= 
//      Normal flow executes statements sequentially, usually from top 
//      to bottom. Control flow uses conditions, loops, and jump statements
//      to determine which statements execute, how often they execute, and when 
//      execution moves elsewhere.

// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn && debitCard && 2 == 2) {
//     console.log("Allow to buy corse");
// }

// || = check multiple value

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

// switch = In JavaScript, a switch statement
//  is used to execute different blocks of code 
// based on the value of an expression.
//  It is often used as an alternative to multiple if...else if statements.
 
// 1. Basic syntax= 
// switch (expression) {  = switch: Checks the expression's value.
//     case value1:     == case: Defines a value to compare.
//         // Code to execute
//         break;         == break: Stops the switch statement.

//     case value2:
//         // Code to execute
//         break;

//     default:   == default: Runs if no case matches.
//         // Code if no case matches
// } 

// 2. Example: Day of the week 
// 
// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid day");
// }

// 3) 4. Example: Using switch with user choices
// let choice = "coffee";

// switch (choice) {
//     case "tea":
//         console.log("You selected tea");
//         break;

//     case "coffee":
//         console.log("You selected coffee");
//         break;

//     case "juice":
//         console.log("You selected juice");
//         break;
//     

//     default:
//         console.log("Invalid choice");
// }   // output : you select coffee.
// const month = 4
// switch (month) {
//     case 1:
//         console.log("january");
        
//         break;
//     case 2:
//         console.log("frb");
        
//         break;
//     case 3:
//         console.log("march");
        
//         break;
//     case 4:
//         console.log("arpil");
        
//         break;

//     default:
//         console.log("default case match");
//         break;
// }  // output : arpil.
