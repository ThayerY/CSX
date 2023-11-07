/**
 * Construct a function intersection that compares input 
 * arrays and returns a new array with elements found in 
 * all of the inputs. BONUS - Use reduce!
 */

// ADD CODE HERE
// const intersection = ar => ar.reduce((ac, cur) => ac.filter(e => cur.includes(e)))

function intersection(arrays) {
  // Start with the first array as the reference
  const referenceArray = arrays[0];
  const result = [];

  for (const element of referenceArray) {
    let foundInAllArrays = true;

    // Check if the current element is present in all other arrays
    for (let i = 1; i < arrays.length; i++) {
      if (!arrays[i].includes(element)) {
        foundInAllArrays = false;
        break;
      }
    }

    if (foundInAllArrays) {
      result.push(element);
    }
  }

  return result;
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

