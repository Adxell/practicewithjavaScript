class ClassWithPrivateField {
    #privateField;
}

class ClassWithPrivateMethod{
    #privateMethod(){
        return 'hello world';
    }
}

class ClassWithPrivateStaticField {
    static #PIRVATE_STATIC_FIELD;
}

class ClassWithPrivateStaticMethod{
    static #privateStaticMethod(){
        return 'hello world'
    }
}

examples 

class ClassWithPrivateField{
    #privateField; 

    constructor(){
        this.#privateField = 42; 
       // delete this.#privateField;   //syntax error
        //this.#undeclaredField = 444; //systax error
    }
}


new ClassWithPrivateField()
console.log(new ClassWithPrivateField());
console.log(instance.#privateField === 42)

class ClassWithPrivateField{
    #privateField; 

    constructor(){
        this.#privateField = 42; 
    }
}

class SubClass extends ClassWithPrivateField{
    #subPrivateField;

    constructor(){
        super();
        this.#subPrivateField = 23;
    }
}

console.log(new SubClass())

class ClassWithPrivateField{
    static #PRIVATE_STATIC_FIELD;

    static publicStaticMethod(){
        ClassWithPrivateField.#PRIVATE_STATIC_FIELD = 42; 
        return ClassWithPrivateField.#PRIVATE_STATIC_FIELD;
    }
}

console.log(ClassWithPrivateField.publicStaticMethod() === 42);
//----------------------------------------------------


class BaseClassWithPrivateStaticField{
    static #PRIVATE_STATIC_FIELD;

    static basePublicStaticMethod(){
        this.#PRIVATE_STATIC_FIELD = 42;
        return this.#PRIVATE_STATIC_FIELD; 
    }
}

class SubClass extends BaseClassWithPrivateStaticField { };

let error = null; 

try{
    SubClass.basePublicStaticMethod();
}catch(e){error = e};

console.log( error instanceof TypeError );

console.log(error)

//Private Methods

class ClassWithPrivateMethod{
    #privateMethod(){
        return 'hello world';
    }

    getPrivateMessage(){
        return this.#privateMethod();
    }
}

const instance = new ClassWithPrivateMethod();

console.log(instance.getPrivateMessage())

class ClassWithPrivateAccessor{
    #message; 

    get #decoratedMessage(){
        return `🎬 ${this.#message}🛑`
    }

    set #decoratedMessage(msg){
        this.#message = msg;
    }

    constructor(){
        this.#decoratedMessage = 'hello world';
        console.log(this.#decoratedMessage)
    }
}

new ClassWithPrivateAccessor()

class ClassWithPrivateStaticMethod {
    static #privateStaticMethod(){
        return 42;
    }

    static publicStaticMethod1(){
        return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }

    static publicStaticMethod2(){
        return this.#privateStaticMethod();
    }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42)
console.log(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42)