const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.compareExchange(uint8, 0,5,2));
console.log(Atomics.load(uint8, 0));

console.log(Atomics.compareExchange(uint8, 0, 5, 4));
console.log(Atomics.load(uint8, 0));

//Using compareExchange()

const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

console.log(Atomics.compareExchange(ta, 0, 7, 12))
console.log(Atomics.load(ta, 0))