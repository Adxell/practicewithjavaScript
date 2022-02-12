let o = { x: 1, y: 2, z: 3};

let a = [], i = 0; 

for(a[i++] in o);
console.log(a);

for (let i in a) console.log(i);