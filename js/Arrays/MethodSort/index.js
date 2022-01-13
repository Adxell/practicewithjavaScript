const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();
console.log(months)
const array1 = [1, 22,30, 4, 21, 100000];
array1.sort()
console.log(array1)
const numbers = [4, 2, 5, 1, 3];

const number= numbers.sort(function(a, b){
    console.log(`La resta de ${a} - ${b}`)
    return a - b;
});
console.log(number)
console.log(numbers)