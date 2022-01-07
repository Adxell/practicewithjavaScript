//alernative reduce() and concat()

// var arr = [1, 2, 3, 4, 5];

// console.log(arr.flatMap(x => [ x*2]));

// console.log(arr.reduce(((acc, x) => acc.concat([x, x*2])),[]));

//let arr1 = [1, 2, 3, 4]; 

// console.log(arr1.map( x => [x * 2]))

// console.log(arr1.flatMap(x => [x * 2]));

// let arr1 = ["it's Sunny in", "", "California"];

// console.log(arr1.map(x => x.split(" ")));

// console.log(arr1.flatMap(x => x.split(" ")));

let a = [5, 4, -3, 20, 17, -33, -4, 18];

a.flatMap((n) => 
    (n < 0)? []: 
    (n % 2 == 0) ? [n]:
                    [n-1, 1]
);

console.log(a.flatMap((n) => 
    (n < 0)? []: 
    (n % 2 == 0) ? [n]:
                    [n-1, 1]
))