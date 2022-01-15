const max = 2n ** 64n - 1n;

function check64bit(number){
    (number > max)?
        console.log('Number doesn\'t fit in unsigned 64-bit integer!'):
        console.log(BigInt.asUintN(64, number));
}

check64bit(2n ** 64n);

check64bit(2n ** 32n);


const max1 = 2n ** 64n - 1n; 

console.log(BigInt.asUintN(64, max));

console.log(BigInt.asUintN(64, max + 1n))
