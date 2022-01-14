const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);


ta[0]=5;
console.log(sab)
console.log(ta)
console.log(Atomics.add(ta, 0, 12))
console.log(Atomics.load(ta, 0))

console.log('Atomics and ' + Atomics.and(ta, 0 , 1))
console.log("Atomics load "+Atomics.load(ta, 0))
console.log(ta[0])

console.log("Atomics CompareExchange "+ Atomics.compareExchange(ta, 0, 5, 12))
console.log("Atomics load "+ Atomics.load(ta, 0))
console.log(ta[0])

console.log('Atomics exchange ', Atomics.exchange(ta, 0, 12))
console.log('load', Atomics.load(ta, 0))


console.log('Atomics isLockFree ', Atomics.isLockFree(1))
console.log('Atomics isLockFree ', Atomics.isLockFree(2))
console.log('Atomics isLockFree ', Atomics.isLockFree(3))
console.log('Atomics isLockFree ', Atomics.isLockFree(4))
console.log('Atomics isLockFree ', Atomics.isLockFree(9))
console.log('Atomics isLockFree ', Atomics.isLockFree(7))


console.log('Atomics or ', Atomics.or(ta, 0, 1))
console.log('Atomics load ', Atomics.load(ta, 0, 1))


console.log('Atomics store', Atomics.store(ta, 0, 12))

console.log('Atomics sub', Atomics.sub(ta, 0, 2))
console.log('Atomics load', Atomics.load(ta, 0))


console.log('Atomics xor', Atomics.xor(ta, 0 , 1))
console.log('Atomics load', Atomics.load(ta, 0))