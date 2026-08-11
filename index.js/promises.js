

// const promiseOne = new Promise(function(resolve, reject) {

//     // Do an async task
//     // DB calls, cryptography, network calls

//     setTimeout(function() {
//         console.log("Async task is completed");
//         resolve();
//     }, 1000);

// });

// promiseOne.then(function() {
//     console.log("Promise consumed");
// });


// // new Promise(function(resolve, reject) {

// //     setTimeout(function() {
// //         console.log("Async task 2 is completed");
// //         resolve();
// //     }, 1000);

// // }).then(function() {
// //     console.log("Async task 2 consumed");
// // });

//   const promiseFive = new Promise(function(resolve. reject) {
//     SetTimeout(function() {
//         let error = false;
//         if(!error) {
//             resolve({username: "gulsan", password: "1234"})
//         } else {
//             reject('ERROR: something went wrong')
            
//         }

//         },1000)
    
//   })

//   async function consumePromise(){
//     const response = await promiseFive
//     console.log(response);

//   }

//   consumePromiseFive


// fetch('https://api.github.com/users/gulsansahu797-maker')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

    // fetch('https://github.com/gulsansahu797-maker')
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });

    