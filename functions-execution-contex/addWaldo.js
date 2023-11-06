/** 
 * Create a function addWaldo that accepts an object with keys
 * being first names and values being last names. For example 
 * addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) 
 * should add the key 'Waldo' with the value 'unknown' to the object and 
 * return the mutated object.
 */

const addWaldo = (obj) => {
  for (let key in obj) {
    if (!obj.hasOwnProperty('Waldo')) {
      return Object.assign(obj, { 'Waldo': 'unknown' })
    } else {
      obj[key]
    }
  }
}
const siliconValley = { 'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle' }
console.log(addWaldo(siliconValley))
// should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }