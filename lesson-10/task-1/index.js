'use strict';

// put your code here
const getFiniteNumbers = arr => arr.filter(item => Number.isFinite(item));

const getFiniteNumbersV2 = arr => arr.filter(item => isFinite(item));

const getNaN = arr => arr.filter(item => Number.isNaN(item));

const getNaNV2 = arr => arr.filter(item => isNaN(item));

const getIntegers = arr => arr.filter(item => Number.isInteger(item));
