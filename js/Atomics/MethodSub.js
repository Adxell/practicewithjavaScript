const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

console.log(Atomics.sub(uint8, 0, 2));

console.log(Atomics.load(uint8, 0));

console.log("----------------------");

//Using Sub()

const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

console.log(Atomics.sub(ta, 0, 50));
console.log(Atomics.load(ta, 0));