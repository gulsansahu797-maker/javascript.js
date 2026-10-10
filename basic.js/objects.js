// Object //

// object is a collection of properties that store data in the form of key-value pairs.
//example - a student has a name, age, course, and college. We can store all these details in one object.

// const student = {
//     name: "Gulsan",
//     age: 18,
//     course: "B.Tech",
//     college: "IES College"
// };
// console.log([student]);

// const obj1 = {a: 1, b: 2, c: 3};
// const obj2 = {d: 4, e: 5, f: 6};
// const obj3 = Object.assign({}, obj1, obj2)
// object.assign() is used to copy the values of all properties from one or more 
// source objects to a target object. It returns the target object.

// console.log(obj3);


// const students = [
//     {
//         id: 1,
//         name: "Gulsan",
//         course: "B.Tech",
//         marks: 85
//     },
//     {
//         id: 2,
//         name: "Rahul",
//         course: "BCA",
//         marks: 90
//     },
//     {
//         id: 3,
//         name: "Aman",
//         course: "B.Tech",
//         marks: 78
//     }
// ];

// // Display all students
// console.log(students);

// // Find one student
// const student = students.find(s => s.id === 1);

// console.log(student);
// console.log(student.name);

// Destructuring//

// Destructuring is a JavaScript feature that allows us to extract
//  values from arrays or properties from objects and store them in separate variables.

// 1. Object Destructuring //

// Without destructuring:

// const student = {
//     name: "Gulsan",
//     age: 18,
//     course: "B.Tech"
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

//With destructuring:
// const student = {
//     name: "Gulsan",
//     age: 18,
//     course: "B.Tech"
// };

// const { name, age, course } = student;

// console.log(name);
// console.log(age);
// console.log(course); 

// 2. Array Destructuring
// const colors = ["Red", "Blue", "Green"];

// const [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);
//Here, the first variable receives the 
// first value, the second receives the second value, and so on.

//3. Rename Variables in Object Destructuring.
// You can also give an extracted property a different variable name.

// const student = {
//     name: "Gulsan",
//     age: 18
// };

// const { name: studentName, age: studentAge } = student;

// console.log(studentName);
// console.log(studentAge);

//Here, name is the original property, while studentName is the new variable.

// 4. Destructuring in Functions.

// Destructuring is often used when passing objects to functions.
// const student = {
//     name: "Gulsan",
//     course: "B.Tech"
// };

// function showStudent({ name, course }) {
//     console.log(name);
//     console.log(course);
// }

// showStudent(student);
//The function directly extracts name and course from the object passed to it.

//      Object destructuring uses {} and array destructuring uses [].

// ******************************************************************************************//

// function 