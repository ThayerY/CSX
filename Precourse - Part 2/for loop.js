/**
 * 1. Iterate through the synonyms array using
 *  a for loop, pushing a greeting string with 
 * the format "Have a [synonym] day!" into the greetings array.

2. Use a second for loop to iterate through the 
 greetings and console.log() each greetings. 
*/

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time,
// push a string into the greetings array.
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE

// for (let i = 0; i < synonyms.length; i++) {
//   greetings.push(`Have a ${synonyms[i]} day!`)
// }

synonyms.reduce((acc, curr) =>
  (greetings.push(`Have a ${curr} day!`), greetings), [])

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
greetings.forEach(greet => console.log(greet))
