/**
 * Create a function findWaldo that accepts an object and 
 * returns the value associated with the key 'Waldo'. 
 * If the key 'Waldo' is not found, the function 
 * should return 'Where's Waldo?'
 */
//----------------------------------------------------------------
//----------------------------------------------------------------
// const findWaldo = obj => obj.Waldo ? obj.Waldo : `Where's Waldo?`
// if (obj.hasOwnProperty('Waldo')) {

// const DC = { 'Bruce': 'Wayne', 'Harley': 'Quinn' }
// const supernatural = { 'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown' }
// console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
// console.log(findWaldo(supernatural)) // should log: 'unknown'

const population = {
  male: 4,
  female: 93,
  animales: 10
};

let populationArr = Object.entries(population);
for ([k, v] of populationArr) {
  console.log(k, v);
}
