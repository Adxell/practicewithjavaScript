const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.or(uint8, 0, 2));

console.log(Atomics.load(uint8, 0))

console.log('------------')

//using or()

const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0]= 2; 
console.log(Atomics.or(ta, 0, 1));

console.log(Atomics.load(ta, 0));