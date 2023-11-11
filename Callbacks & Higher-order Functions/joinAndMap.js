/**
 * Construct a function joinAndMap with three parameters: array1, array2, 
 * and a callback function. The function should combine the two arrays 
 * then invoke the callback function on each element, returning the 
 * resulting array. This function should not mutate the passed-in arrays.
 */

// ADD CODE HERE

// const joinAndMap = (ar1, ar2, cb) => {
//   let result = [].concat(ar1, ar2)
//   let finalResult = result.map(e => cb(e))
//   return finalResult
// }

const joinAndMap = (ar1, ar2, cb) => [].concat(ar1, ar2).map(e => cb(e))

// const joinAndMap = (ar1, ar2, cb) => [...ar1, ...ar2].map(e => cb(e))

// const joinAndMap = (ar1, ar2, cb) => [...ar1, ...ar2]
//   .reduce((ac, cur) => (ac.push(cb(cur)), ac), [])

const arrRed = ['strawberry', 'cherry', 'wine'];
const arrBlue = ['blueberry', 'sky', 'ocean'];
const capitalize = str => str.toUpperCase();
console.log(joinAndMap(arrRed, arrBlue, capitalize));
// should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']