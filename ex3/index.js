var moment = require('moment'); // require
//moment().format();

const today = moment();
console.log(today.format('YYYY-MM-DD'));

const dateA = moment('26-11-1976', 'DD-MM-YYYY');
const dateB = moment().format('YYYY-MM-DD');

console.log(dateA.from(dateB));