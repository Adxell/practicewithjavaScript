const testDate = new Date(1590757517834);

console.log(testDate)
console.log(testDate[Symbol.toPrimitive]('string'))
console.log(testDate[Symbol.toPrimitive]('number'))
console.log(testDate[Symbol.toPrimitive]('default'))
