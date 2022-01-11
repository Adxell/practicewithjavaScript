const array1 = [[0,1], [2, 3], [4,5]].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(array1)


  const value = [0, 1,11, 2, 3, 4].reduceRight(function (
    accumulator,
    currentValue,
    index,
    array
  ) {
      console.log(`accumulator = ${accumulator}, currentValue = ${currentValue}, index = ${index}`)
    return accumulator + currentValue;
  });

  console.log(value)

  //difference between reduce and reduceRight 

  let a = ['1', '2', '3', '4', '5'];

  let left = a.reduce(function(prev, cur){return prev+cur})
  let right = a.reduceRight(function(prev, cur){return prev+cur})
  console.log(left)
  console.log(right)
