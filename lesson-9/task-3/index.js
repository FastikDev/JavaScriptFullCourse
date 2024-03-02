'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
  // put you code here
  const keys = Object.keys(obj);

  for (const key of keys) {
    console.log(key);
  }
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
