// loop // 
// A loop is a programming concept used to execute a block of code repeatedly until a specified condition becomes false.

// Example: Print numbers 1 to 5

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
    // output : 1,2,3,4,5

    // type of loops 
//1) for loop = When we know how many times we want to execute a block of code, we use a for loop.

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
//    Explanation:
// - let i = 1 → Initialization (starting value)
// - i <= 5 → Condition
// - i++ → Increment (increase by 1)
// - console.log(i) → Print the numbe

// while loop = A while loop is used to execute a block of code repeatedly as long as the specified condition is true.

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }
 // output : 1,2,3,4,5.

 // 3) 3. Do...While Loop =A do...while loop executes a block of code at least once, even if the condition is false.
 
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);
  // output : 1,2,3,4,5 /\

  // 4) for.... of loop = A for...of loop is used to iterate over the values of iterable objects, such as arrays and strings.
  
// let fruits = ["Apple", "Mango", "Banana"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }
 // outpu : Apple,mango,banana

 // 5) for..In loop = A for...in loop is used to iterate over the enumerable property keys of an object.
 
// let student = {
//     name: "Gulsan",
//     age: 20,
//     course: "BTech"
// };

// for (let key in student) {
//     console.log(key, student[key]);
// }
  // output: name gulsan, age 20, course Btech.

//   let i = 1;

//   while (i <=5){
//     console.log(i);
//     i++;
//   }

// for (let i = 1; i<= 1000; i++){
//     console.log('Outer loop value: $ {i}');
//     for (let j = 1; j<=10; j++){
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }

/// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // break 

 // The break statement is used to immediately stop or terminate a 
 // loop when a specified condition is met.

//  for (let index = 1; index <=20; index++) {
//     if (index ===5){

//         console.log('detected 5');
//     //     break = shop run time 
//     // continue 
//     }
//     console.log('value of i is &{gulsan}');
//  }
// let myArray = ['flash', 'batman', 'superman']

// const myCoding = [
//     {
//         languageName : "javascript",
//         languageFileName : "js"
//     },

//     {
//         languageName : "python",
//         languageFileName : "py"
//     },

//     {
//         languageName : "cpppp",
//         languageFileName : "cs"
//     },                                // impt to database qus//
// ]
 
//     myCoding.forEach( (item) =>{
//         console.log(item.languageName);
//     } )    // output : javascript,python, cpp   
