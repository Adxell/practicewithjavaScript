function fact(x){
    if(x>1) return x*fact(x-1);
    else return 1;
}

fact(125)

console.log(fact(50));

//-------------------------
const books= {
    topic:"javaScript"
};

books.contens={ ch01: 'hello i am ch01'}
console.log(books.contens?.ch01)

//Funtions 

function plus1(x){
    return x+1;
}

plus1(y);

let square = function(x){
    return x * x; 
}


square(plus1(y)) //We can invoke two funtions in one expression 

///Arrow funtions 

const plus1 = x => x + 1;

const square = x => x * x;

plus1(y)

square(plus1(y))
