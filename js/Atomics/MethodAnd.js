const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0]=7;

console.log(uint8)

console.log(Atomics.and(uint8, 0, 2))
console.log(Atomics.load(uint8, 0))

//Using and()

const sab = new SharedArrayBuffer(1024)
const ta = new Uint8Array(sab);
ta[0]=5;

console.log(Atomics.and(ta, 0, 1));
console.log(Atomics.load(ta, 0));