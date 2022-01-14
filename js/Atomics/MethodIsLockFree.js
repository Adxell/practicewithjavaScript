console.log(Atomics.isLockFree(3))
//3 is not one of the BYTES_PER_ELEMENT

console.log(Atomics.isLockFree(4))
//4 is one of the BYTES_PER_ELEMENT

//Using IsLockFree()

console.log(Atomics.isLockFree(1))
console.log(Atomics.isLockFree(2))
console.log(Atomics.isLockFree(3))
console.log(Atomics.isLockFree(4))
console.log(Atomics.isLockFree(5))
console.log(Atomics.isLockFree(6))
console.log(Atomics.isLockFree(7))
console.log(Atomics.isLockFree(8))
console.log(Atomics.isLockFree(9))
