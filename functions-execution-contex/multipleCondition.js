/**
 * Write a function disemvowel that takes in a string and returns
 *  a new string with all vowels removed.
 */

// function disemvowel(string) {
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//   for (let v of vowels) {
//     string = string.split(v).join('')
//   }
//   return string
// }

//----------------------------------------------------------------
//-----------------------------------------------------------------
// function disemvowel(string) {
//   let result = ''
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

//   for (let i = 0; i < string.length; i++) {
//     if (!vowels.includes(string[i])) {
//       result += string[i]
//     }
//   }
//   return result
// }

//----------------------------------------------------------------
//-----------------------------------------------------------------

// function disemvowel(string) {
//   let result = ''
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

//   return string.split('')
//     .reduce((a, b) => (a = (!vowels.includes(b) ? result += b : a), a), 0)
// }

//----------------------------------------------------------------
//----------------------------------------------------------------

// function disemvowel(string) {
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//   return string.split('').filter(a => !vowels.includes(a)).join('')
// }
//-----------------------------------------------------------------
//----------------------------------------------------------------
// function disemvowel(string) {
//   const vowels = 'aeiouAEIOU'.split('');
//   vowels.forEach(c => {
//     while (string.includes(c)) {
//       string = string.replace(c, '')
//     }
//   })
//   return string
// }

//-----------------------------------------------------------------
//----------------------------------------------------------------
// function disemvowel(string) {
//   const vowels = 'aeiouAEIOU'.split('');
//   for (let i = 0; i < string.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (string[i] === vowels[j]) {
//         string = string.replace(vowels[j], '')
//       }
//     }
//   }
//   return string
// }

function disemvowel(string) {
  let result = ''
  const vowels = 'aeiouAEIOU'.split('')
  for (let i = 0; i < string.length; i++) {
    let str = string[i]
    for (let j = 0; j < vowels.length; j++) {
      let v = vowels[j]
      if (str !== v) {
        string = str[i]
      }
    }
  }
  return string
}
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'