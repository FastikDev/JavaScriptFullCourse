'use strict';

// put your code here
export const getOwnProps = obj => Object.keys(obj).filter(key => typeof obj[key] !== 'function');
