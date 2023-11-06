// https://stackoverflow.com/questions/69586708/having-trouble-in-javascript-with-loops-and-multiple-conditions

// https://stackoverflow.com/questions/77380350/function-to-add-odd-number-and-even-number-to-an-array-with-conditions/77380624?noredirect=1#comment136419948_77380624

//-----------------------------------------------------------------
//----------------------------------------------------------------

function addingAllTheWeirdStuff(arr1, arr2) {
  let sumOdd = 0
  let sumEven = 0
  let greaterThan20 = false

  //filtering the odd numbers and the even numbers and add the to variables
  // arr2.reduce((ac, cur) => (ac = (cur % 2 !== 0 ? sumOdd += cur : sumEven += cur), ac), 0)
  arr2.reduce((ac, cur) => (ac = (cur % 2 ? sumOdd += cur : sumEven += cur), ac), 0)

  //checking if elements in arr2 has greater than 20
  arr2.some(a => a > 20 ? greaterThan20 = true : greaterThan20 = false)

  //looping through arr1
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 10) {
      arr1[i] += sumOdd  // adding sum to odd numbers in arr1
    } else if (arr1[i] > 10) {
      arr1[i] += sumEven  // adding sum toeven number in arr1
    }
    if (greaterThan20)
      arr1[i] += 1  // adding 1 to every element in arr1 because arr2 has element over 20
  }
  return arr1
}

//-----------------------------------------------------------------
//-----------------------------------------------------------------

// function addingAllTheWeirdStuff(array1, array2) {
//   let sumOdd = 0;
//   let sumEven = 0;
//   let greaterThan20 = false; // false by default
//   for (let i = 0; i < array2.length; i++) {
//     if (array2[i] % 2 !== 0)
//       sumOdd += array2[i];
//     else
//       sumEven += array2[i];
//     if (array2[i] > 20)// check if any element > 20
//       greaterThan20 = true;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] < 10)
//       array1[i] += sumOdd;
//     else if (array1[i] > 10)
//       array1[i] += sumEven;
//     if (greaterThan20)// add the +1 if greater than 20
//       array1[i] += 1;
//   }
//   return array1;
// }

//-----------------------------------------------------------------
//----------------------------------------------------------------

function addingAllTheWeirdStuff(array1, array2) {
  let offset = false,
    even = 0,
    odd = 0;

  for (const value of array2) {
    if (value > 20) offset = true;
    if (value % 2) odd += value; else even += value;
  }
  even += offset;
  odd += offset;
  return array1.map(v => v + (v < 10 ? odd : v > 10 ? even : offset));
}


console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5]));
// expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22]));
// expected log [11, 13, 15, 46, 44, 11]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 29, 3, 4, 5, 22]));
// should return [40, 42, 44, 44, 42, 40]

