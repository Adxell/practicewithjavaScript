const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0]=5;

console.log(Atomics.load(uint8, 0))

console.log(Atomics.exchange(uint8, 0, 2))
console.log(Atomics.load(uint8, 0))

//using exchange()
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
console.log("----------------")
console.log(Atomics.exchange(ta, 0, 12));
console.log(Atomics.load(ta, 0));