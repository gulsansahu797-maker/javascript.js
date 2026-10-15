// DOM //  Document Object Model.
// DOM is a bridge between HTML and JavaScript. It allows JavaScript to interact with the structure, content, and styles of a webpage.

/// We use DOM to make websites dynamic and interactive.
// For example:
// 1. Change text when a button is clicked.
// 2. Change the background color of a webpage.
// 3. Add or remove HTML elements.
// 4. Show or hide content.
// 5. Validate forms.
// 6. Respond to mouse and keyboard events.
// 7. Create interactive applications.


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>DOM Example</title>
// </head>
// <body>
//     <h1>Hello JavaScript</h1>
//     <p>Learning DOM</p>
//     <button>Click Me</button>
// </body>
// </html>

// // getElementById() = 

// {/* <h1 id="heading">Hello World</h1>

// <script>
//     const heading = document.getElementById("heading");
//     console.log(heading);
// </script> */}

// querySelector() =
// const heading = document.querySelector("#heading");

// querySelectorAll() = 
// <p class="text">Paragraph One</p>
// <p class="text">Paragraph Two</p>
// <p class="text">Paragraph Three</p>

// <script>
//     const paragraphs = document.querySelectorAll(".text");
//     console.log(paragraphs);
// </script>

// DOM manipulation is the process of changing the content, attributes, styles, or structure of HTML elements using JavaScript.
// <h1 id="title">Hello</h1>

// <script>
//     document.getElementById("title").innerText = "Welcome Gulsan!";
// </script>

// // output // The heading changes from Hello to Welcome Gulsan!.

// difference between DOM and HTML =
// HTML defines the structure of a webpage, while DOM is the browser's object representation of the document that scripts can access and modify.

// difference between querySelector() and querySelectorAll() =
// querySelector() returns the first matching element or null. querySelectorAll() returns a static NodeList of all matching elements.

// difference between event.target and event.currentTarget =
// event.target is the element where the event originated, while event.currentTarget is the element whose listener is currently executing
