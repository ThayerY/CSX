/**
 * Construct a function objOfMatches that accepts two arrays 
 * and a callback. objOfMatches will build an object and return it. 
 * To build the object, objOfMatches will test each element of the 
 * first array using the callback to see if the output matches the 
 * corresponding element (by index) of the second array. If there is a match, 
 * the element from the first array becomes a key in an object, and the 
 * element from the second array becomes the corresponding value
 */
//**************************************************************************
//https://stackoverflow.com/questions/52321509/building-an-object-by-looping-thru-two-arrays
//**************************************************************************
//https://www.youtube.com/watch?v=euRZldF1o3U&ab_channel=Codesmith
// ADD CODE HERE


const objOfMatches = (arr1, arr2, cb) =>
  arr1.reduce((acc, curr, i) => (arr2[i] === cb(curr) ? acc[curr] = arr2[i] : null, acc), {})

// const objOfMatches = (ar1, ar2, cb) => {
//   const newObj = {}
//   for (let i = 0; i < ar1.length; i++) {
//     if (cb(ar1[i]) === cb(ar2[i])) {
//       newObj[ar1[i]] = ar2[i]
//     }
//   }
//   return newObj
// }

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser));
// should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }