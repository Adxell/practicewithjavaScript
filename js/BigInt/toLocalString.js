const bigint = 25635875672485368524n;

console.log(bigint.toLocaleString('de-DE'));


console.log(bigint.toLocaleString('de-DE', { style: 'currency', currency: 'USD'}))

//examples 
let bigint1 = 3556489756400n; 

console.log(bigint1.toLocaleString())

//Using Locales 

let bigint2 = 2456832154875654n;

console.log(bigint.toLocaleString("de-DE"));


console.log(bigint.toLocaleString("ar-EG"));

console.log(bigint.toLocaleString("en-IN"));

console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));

console.log(bigint.toLocaleString(["ban", "id"]));

//Using options 

console.log('------------Using options-------------');

let bigint4 = 343123534234123n; 

console.log(bigint4.toLocaleString('de-DE', { style : 'currency', currency: 'EUR'}));

console.log(bigint4.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }));

console.log(bigint4.toLocaleString("en-IN", { maximumSignificantDigits:3 }));
