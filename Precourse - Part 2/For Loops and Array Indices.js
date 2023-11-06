/*
  For this challenge, loop through the arrays and push a
 string with the format "My name is [firstName] [lastName]
  and I am from [place]" into the array holding the respective bios.
*/

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i = 0; i < firstNames.length; i++) {
  const fullName = `${firstNames[i]} ${lastNames[i]}`
  const location = `${places[i]}`
  const bio = `My name is ${fullName} and I am from ${location}`
  bios.push(bio)
}

console.log(bios)

