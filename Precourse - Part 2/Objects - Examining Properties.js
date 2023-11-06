/**
 * You are provided with an object called checkObj. Using a 
 * for... in loop, determine if the object contains the property 
 * foundNum. If it exists, reassign the value of found to 1.
 */

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
for (let key in checkObj) {
  // if ('foundNum' in checkObj) { found = 1 }
  if (checkObj.hasOwnProperty('foundNum')) { found = 1 }
}
