class ClassWithInstanceField{
    instanceField = 'instance field';
}

class ClassWithStaticField {
    static static = 'static field';
}

class ClassWithPublicInstanceMethod{
    publicMethod(){
        return 'hello world'
    }
}

//examples 

//public static fields

class ClassWithStaticField{
    static staticFiels = 'static field';
}

console.log(ClassWithStaticField.staticFiels)

class ClassWithStaticField1{
    static staticField
}

console.log(ClassWithStaticField1.hasOwnProperty('staticField'))
console.log(ClassWithStaticField1.staticField)

class ClassWithStaticField2{
    static baseStaticFiled = 'base field';
}

class SubClassWithStaticField extends ClassWithStaticField2{
    static subStaticField = 'sub class field';
}

console.log(SubClassWithStaticField.subStaticField)

console.log(SubClassWithStaticField.baseStaticFiled)
//this refers to the class constructor

class ClassWithStaticField3{
    static baseStaticField = 'base static field';
    static anotherBaseStaticField = this.baseStaticField;
    static baseStaticFieldMethod(){ return 'base static method output'}
}

class SubClassWithStaticField extends ClassWithStaticField3{
    static subStaticField = super.baseStaticFieldMethod()
}


console.log(ClassWithStaticField3.anotherBaseStaticField)

console.log(SubClassWithStaticField.subStaticField)


//public instance fields 

class ClassWithInstanceField1{
    instanceField = 'instance field';
}

const instance = new ClassWithInstanceField1()

console.log(instance.instanceField)


//Like properties, field names my be computed 

const PREFIX = 'adxell'

class ClassWithComputedFieldName {
    [`${PREFIX}Field`] = 'adxell field'
}

const instance1 = new ClassWithComputedFieldName()
console.log(instance1.adxellField)


class ClassWithStaticField {
  static staticFiels = "static field";
}

console.log(ClassWithStaticField.staticFiels);

class ClassWithStaticField1 {
  static staticField;
}

console.log(ClassWithStaticField1.hasOwnProperty("staticField"));
console.log(ClassWithStaticField1.staticField);

class ClassWithStaticField2 {
  static baseStaticFiled = "base field";
}

class SubClassWithStaticField extends ClassWithStaticField2 {
  static subStaticField = "sub class field";
}

console.log(SubClassWithStaticField.subStaticField);

console.log(SubClassWithStaticField.baseStaticFiled);

class ClassWithStaticMethod{
    static staticMethod(){
        return 'static method has been called'
    }
}

console.log(ClassWithStaticMethod.staticMethod())

//public instance methods

class ClassWithPublicInstanceMethod {
    publicMethod(){
        return 'hello world'
    }
}

const instance = new ClassWithPublicInstanceMethod();

console.log(instance.publicMethod())

class ClassWithFancyMethods {
  *generatorMethod() {}
  async asyncMethod() {}
  async *asyncGeneratorMethod() {}
}

class BaseClass {
  msg = 'hello world'
  basePublicMethod() {
    return this.msg
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod()
  }
}

const instance = new SubClass()
console.log(instance.subPublicMethod())
//expected output: "hello world"

class ClassWithGetSet {
  #msg = 'hello world'
  get msg() {
    return this.#msg
  }
  set msg(x) {
    this.#msg = `hello ${x}`
 }
}

const instance = new ClassWithGetSet()
console.log(instance.msg)
//expected output: "hello world"

instance.msg = 'cake'
console.log(instance.msg)
//expected output: "hello cake"