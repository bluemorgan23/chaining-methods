const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// // Sort the numbers in descending order (10, 9, 8, 7, etc).

// console.log(integers.sort(function (a, b) {return b-a}));

// // Remove any integers greater than 19.
// const greaterThan19 = integers.filter(integer => {
//     let isGreaterThanNineteen = false;

//     if(integer > 19){
//         isGreaterThanNineteen = true;
//     }
//     return isGreaterThanNineteen;
// });

// console.log(greaterThan19);



// // Multiply each remaining number by 1.5 and then subtract 1.
// const multiply = greaterThan19.map(number => {
//     return ((number * 1.5) - 1);
// })
// console.log(multiply);


// // Then output (either in the DOM or the console) the sum of all the resulting numbers.
// const sum = multiply.reduce((currentNum, nextNum) => currentNum += nextNum);

// console.log(sum);

//Trying to make one line
const newArray = (integers.sort(function (a, b) {return b-a})).filter(integer => {
    let isGreaterThanNineteen = false;

    if(integer > 19){
        isGreaterThanNineteen = true;
    }
    return isGreaterThanNineteen
}).map(number => {
    return ((number * 1.5) - 1);
}).reduce((currentNum, nextNum) => currentNum += nextNum);

console.log(newArray);