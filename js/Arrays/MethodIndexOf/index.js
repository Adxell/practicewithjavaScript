const beasts=['ant', 'bison', 'camel', 'duck', 'bison'];

//console.log(beasts.indexOf('bison'));

//start from index 2 

// console.log(beasts.indexOf('bison',2))

// console.log(beasts.indexOf('giraffe'));

//using indexOf 
// var array = [2,9,9];

// array.indexOf(2)
// array.indexOf(7)
// array.indexOf(9,2)
// array.indexOf(2,-1)
// array.indexOf(2,-3)

//Finding all the occurrences of an element
// let indices = [];
// let array=['a', 'b', 'a', 'c', 'a', 'd'];
// let element='a';

// let idx = array.indexOf(element)

// while(idx != -1){
//     indices.push(idx);
//     idx = array.indexOf(element, idx +1);
// }
// console.log(indices)

//Finding if an element exists in the array or not and updating the array

function updateVegetablesColletion (veggies, veggie){
    if(veggies.indexOf(veggie) === -1){
        veggies.push(veggie);
        console.log('New veggies collection is: ' + veggies );
    }else if(veggies.indexOf(veggie) > -1){
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

let veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesColletion(veggies, 'spinach')
updateVegetablesColletion(veggies, 'spinach')