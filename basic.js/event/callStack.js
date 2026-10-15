// Call Stack //
// The call stack keeps track of which function is currently running and which function should execute next after the current function finishes.

// function one() {
//     console.log("Function One");
//     two();
// }

// function two() {
//     console.log("Function Two");
//     three();
// }

// function three() {
//     console.log("Function Three");
// }

// one();  // output : function one, function two, function three.


// LIFO stands for Last In, First Out. ==
// It means the last function added to the stack is the first function removed.
// For example:

// Push order:
// one() → two() → three()

// Pop order:
// three() → two() → one()

// Call Stack and Execution Context = 
// The call stack manages execution contexts.
// An Execution Context is the environment in which JavaScript code is executed.
// There are two important types:
// - Global Execution Context (GEC): Created when JavaScript starts executing a script.
// - Function Execution Context (FEC): Created whenever a function is called.


 // Event // == 
//  Events allow JavaScript to detect user actions and respond to them, making websites interactive.

//  Types of Events = chick, dblclick, mouseover, mouseout, keydown , MediaKeyStatusMap,submit,input, change, load.Events.Event ,

//  /// Click Event= \
 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>JavaScript Event</title>
// </head>
// <body>

//     <h1 id="heading">Hello World</h1>
//     <button id="btn">Click Me</button>

//     <script>
//         const button = document.getElementById("btn");

//         button.addEventListener("click", function() {
//             document.getElementById("heading").innerText =
//                 "Welcome to JavaScript!";
//         });
//     </script>

// </body>
// </html>

// ddEventListener() = addEventListener() is a JavaScript method used to attach an event handler to an HTML element

// btn → The selected HTML button.



// addEventListener() → Registers an event listener.



// "click" → The type of event.



// function() → The callback that executes when the event occurs.

// An event object contains information about an event, including its type, target element, and mouse or keyboard details.
// document.addEventListener("click", function(event) {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX);
//     console.log(event.clientY);
// });

