/**
 * Add code to the function arrToObj in the place marked "ADD CODE HERE" 
 * in order to achieve the desired console logs. arrToObj should return 
 * an object that has elements from the passed-in array as keys, and the 
 * outputs from the callback (when those elements are passed in) as the 
 * corresponding values.
 */

// const arrToObj = (ar, cb) => {
//   const obj = {}
//   for (let i = 0; i < ar.length; i++) {
//     obj[ar[i]] = cb(ar[i])
//   }
//   return obj
// }

const arrToObj = (ar, cb) => ar.reduce((ac, cur) => (ac[cur] = cb(cur), ac), {})

const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize));
// should log: { beer: 'BEER', glue: 'GLUE' }