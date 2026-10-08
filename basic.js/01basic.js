// const accountId = 123333
// let accountName = "gulsansahu@gmail.com"
//  var accountPassword = "706066"
//  accountCity = "Bangalore"

//  accountEmail = "gkshah@gmail.com"
//  accountPassword = "606060"
//  accountCity = "jaipur"


// // console.log(accountId, accountName, accountPassword, accountCity)

// console.table({accountId, accountName, accountPassword, accountCity})

// // prefer not to use var because of hoisting and scope issues. 
// // Use let and const instead for better scoping and to avoid accidental reassignments.


// // const → value cannot be reassigned
// const userId = 123456;

// // let → value can be changed
// let userName = "Gulsan";
// let userEmail = "gulsan@example.com";

// // var → old way of declaring variables
// var userCity = "Bhopal";

// // Changing let and var values
// userName = "Rahul";
// userEmail = "rahul@example.com";
// userCity = "Indore";

// // Display all values
// console.table({
//     userId,
//     userName,
//     userEmail,
//     userCity
// });

const accountId = 123456;

let accountName = "Gulsan";
let accountEmail = "gulsan@example.com";

var accountCity = "Bhopal";

// Reassigning values
accountName = "Gulsan Kumar";
accountEmail = "gulsankumar@example.com";
accountCity = "Indore";

console.table({
    accountId,
    accountName,
    accountEmail,
    accountCity
});

// Prefer const and let instead of var
