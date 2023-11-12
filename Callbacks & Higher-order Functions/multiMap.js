/**
 * Construct a function multiMap that will accept two arrays - an 
 * array of values and an array of callbacks. multiMap will 
 * return an object whose keys match the elements in the 
 * array of values. The corresponding values that are assigned to the 
 * keys will be arrays consisting of outputs from the array of callbacks, 
 * where the input to each callback is the key.
 */

// const multiMap = (ar, cb) => {
//   let obj = {}
//   ar.forEach(v => obj[v] = cb.map(c => c(v)))
//   return obj
// }

// with reduce
// const multiMap = (ar, arcb) => ar
//   .reduce((ac, cur) => (ac[cur] = arcb.map(c => c(cur)), ac), {})

// with for loop
const multiMap = (ar, arOfCb) => {
  const obj = {}
  for (let i = 0; i < ar.length; i++) {
    obj[ar[i]] = []

    for (let j = 0; j < arOfCb.length; j++) {
      obj[ar[i]].push(arOfCb[j](ar[i]))
    }
  }
  return obj
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
// glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }