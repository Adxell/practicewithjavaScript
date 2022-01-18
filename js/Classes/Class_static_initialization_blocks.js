class ClassWithStaticInitializationBlock{
    static staticProperty1 = 'property 1';
    static staticProperty2 = 'property 2';
}

console.log(ClassWithStaticInitializationBlock.staticProperty1);
console.log(ClassWithStaticInitializationBlock.staticProperty2)

//The scope 

let y = 'Outer y'; 

// class A{
//     static field = "Inner y";
//     static{
//         let y = this.field; 
//     }
// }

console.log(y);


class MyClass {
  static field1 = console.log("field1 called");
  static {
    console.log("Class static block #1 called");
  }
  static field2 = console.log("field2 called");
  static {
    console.log("Class static block #2 called");
  }
}

console.log(MyClass)