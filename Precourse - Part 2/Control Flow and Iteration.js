/**
 * Iterate through the array and multiply a number by 10 if it 
 * is greater than or equal to 5.
 */

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6]
  .reduce((acc, n) => (n > 5 ? acc.push(n * 10) : acc.push(n), acc), [])
// ADD CODE HERE


// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]