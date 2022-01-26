//The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. For the day of the month

const birthday= new Date('August 19, 1975 23:15:30');
const day1 = birthday.getDay();
//sunday -saturday : 0 - 6

console.log(day1)

//An integer number, between 0 and 6, corresponding to the day of the week for the given date, according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

let Xmas95 = new Date('December 25, 1995 23:15:30');
let weekday = Xmas95.getDay();

console.log(weekday)

//Using Intl.DateTimeFormat

var options = {weekday:'long'};
console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95))