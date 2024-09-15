// let total = 0;
// function minmax(array) {
//   let arr = [];
//   arr.push(Math.min(...array));
//   arr.push(Math.max(...array));
//   console.log(arr);
// }
//                                                                                   total of an Array
// let total = 0;
// function sum(array) {
//   for (let index = 0; index < array.length; index++) {
//     total += array[index];
//   }
//   console.log(`${total} ohms`);
// }
// sum([1, 5, 6, 3]);
// //                                                                                last Element of an Array
// function lastele(array) {
//   console.log(array.slice(-1));
// }
// lastele([1, 2, 3, 4]);
//                                                                                 Array to string
// function arrayToString(arr) {
//   let s = arr;
//   console.log(s.toString());
// }
// arrayToString([1, 2, 3, 4]);
//                                                                                   concat two arrays
// let a = [1, 2, 3, 4, 5, 6];
// let b = [7, 8, 9, 10, 11, 12];
// let c = a.concat(b);
// console.log(c);
//                                                                         fizz buzz
// function fizzbuzz(i) {
//   // body
//   for (let n = 1; n <= i; n++) {
//     if (n % 5 == 0 && n % 3 == 0) {
//       console.log("fizzbuzz");
//     } else if (n % 5 == 0) {
//       console.log("buzz");
//     } else if (n % 3 == 0) {
//       console.log("fizz");
//     } else {
//       console.log(n);
//     }
//   }
// }
// fizzbuzz(20);
//                                                              index of element
// function valueat(arr, i) {
//   let arra = arr;

//   console.log(arra.indexOf(i));
// }

// valueat(["hi", "edabit", "fgh", "abc"], "hi");
//                                                             includes an elements
// function check(arr, ele) {
//   let a = arr;
//   console.log(a.includes(ele));
// }
// check(["hi", "edabit", "fgh", "abc"], "hi");
//                                                        extract number from an array
// function check(arr) {
//   arr.forEach((element) => {
//     if (typeof element == "string") {
//       console.log(element);
//     }
//   });
// }
// check([1, 2, "a", "b"]);
// function stn(x, y) {
//   let a = x * 2 ** y;
//   console.log(a);
// }

// stn(10, 3);

//                                          Check if One Array can be Nested in Another
// function asd(arr1, arr2) {
//   if (
//     Math.min(...arr1) > Math.min(...arr2) &&
//     Math.max(...arr1) < Math.max(...arr2)
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// asd([9, 9, 8], [8, 9]);
//                                   tuck array in b/w
// function tuckarr(arr1, arr2) {
//   let a = Math.floor(arr1.length / 2);
//   arr1.splice(a, 0, ...arr2);
//   return arr1;
// }

// let b = tuckarr([15, 34, 2, 5, 6, 6, 2, 62, 6, 76, 76, 24], [45, 75, 35]);
// console.log(b);
