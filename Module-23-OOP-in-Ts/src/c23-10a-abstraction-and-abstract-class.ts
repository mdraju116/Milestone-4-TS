
/* 
✅✅✅Abstraction and abstract classes
https://phi-lab-next.vercel.app/lab/oop/abstraction

✅Abstraction is exposing what a thing does while hiding how it does it. 
✅An abstract class is a class that cannot be instantiated and may declare abstract members —
  members with no implementation that every concrete subclass is required to provide.

In plain words
A half-finished plan with required blanks. You cannot pay with an abstract Payment — only with a bKash or a cash one. Forgetting a blank is a compile error, not a 2am bug.


➡️Real life first
Send Money
When you tap Send Money in the bKash app, here is everything you know: a number, an amount, a PIN.
Here is everything you do not know, and do not need to: which bank settles it, how the SMS gateway is contacted, what happens if the first attempt times out, how the fraud check scores your account.
That gap is abstraction. The app shows you what it does and hides how.

Now notice something. "Payment" as a general idea cannot actually pay anyone. You cannot walk up to a shop and perform an abstract Payment — you pay by cash, or by bKash, or by card. The general idea is real and useful for thinking, but only the specific ones can act.
TypeScript has a word for exactly that: abstract.


*/

//📌Abstraction means hiding unnecessary implementation details of code like Math.floor() -ekane shudu function er name jani, baki er pichoner code dekha jay na.
//📌Abstract class means Contract/conection rules between Parent and child class

//As usual child tar parent er sobkicu pabe/pay, kintu parent jodi shorto jure dey je, amar sompod paite hole tomake
//ei ei kaj korte hobe, tokon take bole abstract class. Ex-Shape2 er property paite hole obossoi child e area2() thakte hobe.

//⚠️Abstract method er kono implementation thakte parbe na, and ⚠️eke instantiate o kora jabe na i.e instance banano jabe na.
// An abstract class can also have properties and a constructor.

//Normal class and method
class Shape{
  area():number{
    return 0;
  }
}
const shape=new Shape();
console.log(shape); //Shape {}



//abstract class and abstract method
abstract class Shape2 {    //Shape2 is an abstract class   
  abstract area2():number; //area2() is an abstract method    

  describe(){   //eta abstract class er vitore, kintu abstract method noy, eta automatic peye jabe child class
    console.log("This is a shape ");
    
  }
}
// const shape2=new Shape2(); //Error : Cannot create an instance of an abstract class.





// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:
/*

✅✅✅Abstraction , Abstract Class and Inhertance in TypeScript

✅✅1. Abstraction
Abstraction means hiding unnecessary implementation details and exposing only the essential features.

In simple words:
Show what an object does, hide how it does it.


➡️Real-world example
When you drive a car:

You
 ↓
start()
 ↓
Car starts

You don't need to know exactly how the engine, fuel injection, and ignition system work.
You only interact with the essential operation:
start()
stop()
accelerate()

That's abstraction.



✅✅2. Abstraction in Programming
Suppose we have different animals.
Every animal should make a sound, but each animal does it differently.

➡️We can define the common requirement:
abstract class Animal {
    abstract makeSound(): void;
}

Here:
abstract makeSound(): void;
says:
Every child class must provide a makeSound() method.

⚠️But the parent doesn't specify how.



✅✅3. Abstract Class
An abstract class is a class that is designed to be inherited, not directly instantiated.

abstract class Animal {
    abstract makeSound(): void;

    eat(): void {
        console.log("Animal is eating");
    }
}

➡️➡️It contains two types of methods:

➡️Abstract method
abstract makeSound(): void;
⚠️Has no implementation
Child class must implement it


➡️Concrete method
eat(): void {
    console.log("Animal is eating");
}
⚠️Has an implementation
Child classes inherit it



✅✅4. Child Class

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

And:
class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

Now:
const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // Woof!
cat.makeSound(); // Meow!

dog.eat();       // Animal is eating
cat.eat();       // Animal is eating



✅✅5. You Cannot Create an Abstract Class Directly

⚠️This is not allowed:
const animal = new Animal();❌ Error.
Because Animal is abstract.

Instead:
const dog = new Dog();



✅✅6. Why Use Abstract Classes?

Suppose you have:

Animal
 ├── Dog
 ├── Cat
 └── Cow

All animals must have:
makeSound()

But the implementation is different:
Dog → Woof!
Cat → Meow!
Cow → Moo!

➡️An abstract class lets you enforce this common requirement.
abstract class Animal {
    abstract makeSound(): void;
}
Now TypeScript won't allow a child class to forget makeSound().




✅✅7. Abstract Class + Constructor
📌An abstract class can also have properties and a constructor.

abstract class Animal {
    constructor(public name: string) {}
    abstract makeSound(): void;

    eat(): void {
        console.log(`${this.name} is eating`);
    }
}

➡️Child:
class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} says Woof!`);
    }
}

Usage:
const dog = new Dog("Tommy");
dog.eat();
dog.makeSound();

Output:
Tommy is eating
Tommy says Woof!


✅✅8. Abstraction vs Encapsulation

These two are often confused.

| Abstraction                        | Encapsulation                                 |
| ---------------------------------- | --------------------------------------------- |
| Hides implementation complexity    | Controls access to data                       |
| Focuses on **what** an object does | Focuses on **how data is accessed/protected** |
| Uses abstract classes/interfaces   | Uses access modifiers, getters/setters        |
| `abstract`                         | `private`, `protected`, `public`              |










*/