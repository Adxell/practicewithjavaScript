const date1 = new Date('December 17, 1995 03:24:00');

const date2 = new Date('1995-12-17T03:24:00');
console.log(date1[Symbol.toPrimitive]('number'))
console.log(date2[Symbol.toPrimitive]('number'))
console.log(date1===date2);

console.log(date1-date2)

//syntax 
// new Date();
// new Date(value);
// new Date(dateString);
// new Date(dateObject);

// new Date(year, monthIndex);
// new Date(year, monthIndex, day);
// new Date(year, monthIndex, day, hours);
// new Date(year, monthIndex, day, hours, minutes);
// new Date(year, monthIndex, day, hours, minutes, seconds);
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);


//Exmaples
let today = new Date()

console.log(today)

let sameDay = new Date(today)
console.log(sameDay)

// let today = new Date();
// let sameDay = new Date(today);
// let birthday = new Date("December 17, 1995 13:24:00");
// let birthday = new Date("1995-12-17T13:24:00");
// let birthday = new Date(1995, 11, 17); // the month is 0-indexed
// let birthday = new Date(1995, 11, 17, 13, 24, 0);
