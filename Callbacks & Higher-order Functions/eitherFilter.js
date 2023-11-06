/**
 * Add code to the function eitherFilter in the place 
 * marked "ADD CODE HERE" in order to achieve the desired 
 * console logs. The array returned from eitherFilter should 
 * contain all elements in the passed-in array that yield a 
 * truthy return value when passed into EITHER of the two callbacks 
 * passed into eitherFilter.
 */
//**************************************************************************

https://www.youtube.com/watch?v=d47lDekXf4E&ab_channel=Codesmith

// const eitherFilter = (arr, cb1, cb2) => arr.filter(a => cb1(a) || cb2(a))
//**************************************************************************
const eitherFilter = (arr, cb1, cb2) =>
  arr.reduce((ac, cur) => (cb1(cur) || cb2(cur) ? ac.push(cur) : [], ac), [])
//************************************************************************* 
// const eitherFilter = (array, callback1, callback2) => {
//   const arr = []
//   for (let i = 0; i < array.length; i++) {
//     if (callback1(array[i]) || callback2(array[i])) arr.push(array[i])
//   }
//   return arr
// }

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]