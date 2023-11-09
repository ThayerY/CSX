/**
 * Construct a function union that takes an input array of arrays, 
 * compares each array, and returns a new flat array that contains 
 * all elements. If there are duplicate elements, only add it 
 * once to the new array. Preserve the order of the elements starting 
 * from the first element of the first input array. BONUS - Use reduce!
 */

// https://www.youtube.com/watch?v=AHAcaJUG_Qo&ab_channel=Codesmith

// ADD CODE HERE
//*************************************************************************
const union = arr => arr.reduce((ac, cur) => Array.from(new Set(ac.concat(cur))))
//**************************************************************************

const union1 = arr => Array.from(new Set(arr.flat(Infinity)))



const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]