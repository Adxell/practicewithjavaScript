const flag = new Boolean();

console.log(flag);
console.log("--------Creating Boolean objects with an initial value of false ----------")
let bNoParam = new Boolean();
console.log(bNoParam);

let bZero = new Boolean(0);

console.log(bZero);

let bNull = new Boolean(null);

console.log(bNull);

let bEmptyString = new Boolean("");

console.log(bEmptyString);

let bfalse = new Boolean(false);

console.log(bfalse);

console.log("--------Creating Boolean objects with an initial value of true ----------")

let btrue = new Boolean(true);

console.log(btrue);

let btrueString = new Boolean('true');

console.log(btrueString);

let bfalseString = new Boolean('false');

console.log(bfalseString)

let bSuLin = new Boolean('Su Lin');

console.log(bSuLin);

let bArrayProto= new Boolean([]);

console.log(bArrayProto);

let bObjProto = new Boolean({});

console.log(bObjProto);
