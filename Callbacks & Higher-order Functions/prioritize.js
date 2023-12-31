/**
 * Create a function prioritize that accepts an array and a callback. The 
 * callback will return either true or false. prioritize will iterate 
 * through the array and perform the callback on each element, and 
 * return a new array, where all the elements that yielded a return 
 * value of true come first in the array, and the rest of the elements come second.
 */

// ADD CODE HERE
// const prioritize = (ar, cb) => {
//   const arWs = []
//   const arNs = []
//   for (let i = 0; i < ar.length; i++) {
//     if (cb(ar[i])) {
//       arWs.push(ar[i])
//     } else {
//       arNs.push(ar[i])
//     }
//   }
//   return arWs.concat(arNs)
// }

// const prioritize = (ar, cb) => ar.filter(e => cb(e)).concat(ar.filter(e => !cb(e)))

const prioritize = (ar, cb) => ar
  .reduce((ac, cur) => (cb(cur) ? ac.unshift(cur) : ac.push(cur), ac), [])



function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS));
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']