//Example

// class Triple {
//     static customName = 'Tripler';
//     static description = 'I triple any number you provide';
//     static calculate(n = 1){
//         return n * 3;
//     }
// }

// class SquaredTriple extends Triple {
//     static longDescription; 
//     static description = 'i square the triple of any number you provide';
//     static calculate(n){
//         return super.calculate(n) * super.calculate(n);
//     }
// }

// console.log(Triple.description)
// console.log(Triple.calculate())
// console.log(Triple.calculate(6))

// console.log(SquaredTriple.calculate(3));
// console.log(SquaredTriple.description);
// console.log(SquaredTriple.customName)
// const tp = new Triple()
// console.log(tp.calculate());

// class StaticMethodCall{
//     static staticProperty = 'static property';
//     static staticMethod(){
//         return 'Static method and '+ this.staticProperty + ' has been called';
//     }

//     static anotherStaticMethod(){
//         return this.staticMethod() + 'from another static method';
//     }
// }


// console.log(StaticMethodCall.staticMethod())

// console.log(StaticMethodCall.anotherStaticMethod())


class StaticMethodCall {
    
    static staticProperty = "static property";
    static staticMethod() {
        return "static method has been called.";
    }
    constructor() {
      console.log(StaticMethodCall.staticProperty); // 'static property'
      console.log(this.constructor.staticProperty); // 'static property'
      console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
      console.log(this.constructor.staticMethod()); // 'static method has been called.'
    }
}