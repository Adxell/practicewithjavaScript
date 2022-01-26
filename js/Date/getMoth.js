const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getMonth())

//examples 

let Xmas95 = new Date('December 25, 1995 23:15:30');
let month = Xmas95.getMonth();

console.log(month)

//We can use to Intl.DateTimeFormat()

let options = { month: 'long'};

console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));