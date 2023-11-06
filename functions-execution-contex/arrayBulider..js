/**
 * Write a function arrayBuilder that takes in a count object and 
 * returns an array filled with the appropriate numbers of elements. 
 * The order of the elements in the array does not matter, but 
 * repeated elements should be grouped.
 */

function arrayBuilder(obj) {
  const arr = [];
  for (const key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      arr.push(key);
    }
  }
  return arr;
}
console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []


