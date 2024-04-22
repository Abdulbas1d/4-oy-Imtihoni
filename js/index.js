// 1-Misol

// function NumberInArray(numberString) {
//     const number = parseInt(numberString);

//     if (isNaN(number)) {
//         return "Invalid number";
//     }

//     const NumberArray = number.toString().split('').reverse();

//     return NumberArray;
// }

// const numberString = "34567";
// console.log(NumberInArray(numberString));







// 2-Misol

// let a = 5;
// let b = 5;

// if (a == b) {
//     console.log (true)
// } else {
//     console.log(false);
// }

// Bu yerda oddiy a   b ga tengmi deyilyapti

// if (a === b) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Bu yerda a va b ni tipigachor tekshirib chiqyapti ya'ni tengligini






// 3-Misol

// function numberArray(n) {
//     if (n === 1) {
//         return [1]
//     } else {
//         let arr = numberArray (n - 1)
//         arr.push(n)
//         return arr
//     }

// }

// const Userinput = 10
// const resultArray = numberArray (Userinput)
// console.log(resultArray);







// 4-Misol

// function sumArray(arr) {
//     const arrSum = arr.filter(num => num % 2 !== 0);
//     const evenSum = arr.filter(num => num % 2 === 0);
//     return [arrSum, evenSum];
// }
  
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const result = sumArray(numbers);
// console.log(result);







// 5-Misol

// function multipleMarks(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === '!') {
//       } else if (str[i].match()) {
//         result += str[i];
//       }
//     }
//     return result;
// }
  
// console.log(multipleMarks("Hello! How are you?"));






// 6-Misol

// 7-Misol

// function removeFirstAndLast(str) {
//     if (str.length <= 2) {
//         return '';
//     } else {
//         var result = '';
//         for (var i = 1; i < str.length - 1; i++) {
//             result += str[i];
//         }
//         return result;
//     }
// }

// console.log(result);