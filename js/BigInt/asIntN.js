const max = 2n ** (64n - 1n) -1n;

function check64bit(number){
    (number > max)? console.log('Number doesn\'t fit signed 64-bit integer!'):
    console.log(BigInt.asIntN(64, number))
}

check64bit(2n ** 64n);

check64bit(2n ** 32n);

//Examples 
const max1 = 2n ** (64n - 1n) - 1n; 

console.log(BigInt.asIntN(64, max1))
console.log(BigInt.asIntN(64, max1 + 1n))
