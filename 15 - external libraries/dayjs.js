import dayjs from 'https://unpkg.com/dayjs@1.8.9/esm/index.js';
import isWeekend from './dates.js';

const date = dayjs();

// get the date 5 days after today and display in format: '<Month> <Day of Month>'
let newdate = date.add(5, 'days');
console.log(newdate.format('MMMM D'));

// calculate 1 month after today
newdate = date.add(1, 'months');
console.log(newdate.format('MMMM D'))

// <Day of of week
console.log(date.format('dddd'));

// returns true if the date is Saturday or Sunday
console.log(isWeekend(date));
