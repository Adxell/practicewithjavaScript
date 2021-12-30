// const array1 = ['a','b','c','d','e','f'];

// console.log(array1.copyWithin(4,3,5))

//const result=[1,2,3,4,5].copyWithin(-2);

//const result=[1,2,3,4,5].copyWithin(0,3);

//const result=[1,2,3,4,5].copyWithin(0,3,4);

//const result =[1,2,3,4,5].copyWithin(-2,-3,-1);

//const result = [].copyWithin.call({length:5,3:1}, 0, 3)

// var i32a = new Int32Array([1,2,3,4,5]);
// i32a.copyWithin(0,2)
// console.log(i32a);

const result = [].copyWithin.call(new Int32Array([1,2,3,4,5]),0,3,4);
console.log(result)