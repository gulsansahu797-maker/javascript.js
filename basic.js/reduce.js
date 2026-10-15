// Reduce ///
// The reduce() method is a built-in JavaScript array method used to process 
// all elements of an array and reduce them to a single value.

// Syntax of reduce()

// array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);

// Parameters:
// - Accumulator (acc) – Stores the result of previous iterations.
// - Current Value (curr) – The current array element being processed.
// - Initial Value – The starting value of the accumulator.

// Example of reduce()

// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(total);
 // output : 15.

 //  Qus) Reduce = The reduce() method is a higher-order array
 //  method that executes a callback function on 
 // each element of an array and returns a single accumulate

 // shopping card.

//  const shoppingCard = [
// {
//        itemName : " js course",
//         price: 2999,
// },
// {
//        itemName : " py course",
//         price: 299,
// },
// {
//        itemName : " c++ course",
//         price: 559,
// },

//  ]
//   const priceTopay = shoppingCard.reduce((acc, item) => acc + item.price, 0)

//   console.log(priceTopay);
