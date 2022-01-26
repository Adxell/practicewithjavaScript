const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');

console.log(date1.getTimezoneOffset());

console.log(date2.getTimezoneOffset());

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());


//Examples 

let currentLocalDate = new Date();

let laborDay2016at0324GMTminus2 = new Date('May 1, 2016 03:24:00 GMT-0200');

console.log(currentLocalDate.getTimezoneOffset() === laborDay2016at0324GMTminus2.getTimezoneOffset());