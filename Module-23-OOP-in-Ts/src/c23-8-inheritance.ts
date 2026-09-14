/* 
📌📌https://phi-lab-next.vercel.app/lab/oop/inheritance

✅✅Inheritance (উত্তরাধিকার সূত্রে পাওয়া)
Inheritance is a relationship in which one class, the subclass, automatically receives the fields and methods of another class, the superclass, and may add to or replace them. The subclass constructor must call super() before using this.

In plain words
Write the shared part once in the parent, and every child is born owning it — land, house and shop, with nothing rebuilt. Before writing extends, say the sentence out loud: "a Child is a Parent". If it sounds wrong, you want a field instead.


➡️What the family passes down
You already know this word from outside programming. When a parent passes on the family land, the house and the shop, the children inherit it. Nobody rebuilds the house. It arrives already built.

Four things about that everyday inheritance are true in code, exactly:
1. You start with what the parent had. The child does not begin from nothing. Land, house, shop — all present on day one, without a single line of effort.
2. You can add your own. A child who buys a motorcycle owns the land and the motorcycle. The parent never had one. Adding does not break anything that came down.
3. You can use what you inherited differently. The parent ran the shop as a grocery; the child turns it into a pharmacy. Same shop, different use. In code this is called overriding — you keep the name, you change what happens.
4. You cannot inherit what was never shared. The parent's personal diary, locked in a drawer nobody else opens, does not pass down. That is private from module 3. Something kept for the family only — the heirloom nobody outside the family may touch, but every child may — is protected. And public is the shop out front, open to the whole street.



*/


//Parent class / super class
class User {
    private _name:string
    private _age:number
    private _email:string

    constructor (name:string, age:number,email:string){
        this._name=name;
        this._age=age;
        this._email=email;
    }


    get myAge(){
        return this._age;
    }
   
 
    set myAge(newAge:number){ 
        if(newAge<0 || newAge>100){

            throw new Error("Age is not valid");
        }
        this._age=newAge;  //assgning newValue to old one
    }

}



//child class 
class Student extends User {
    private _fee :number;

    constructor (name:string, age:number,email:string,fee:number){
        super(name,age,email); // When a child class has a constructor, it must call:super() , before using (this).
        this._fee=fee;
    }


}
const student1 =new Student("Rafi",30,"rafi@gmail.com",500);
console.log(student1); //Student { _name: 'Rafi', _age: 30, _email: 'rafi@gmail.com', _fee: 500 }
















// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:
/* 

✅✅✅Inheritance in TypeScript
Inheritance is an OOP concept where a child class gets properties and methods from a parent class.
It promotes code reuse.

Simple idea
        Parent Class
        ┌───────────┐
        │ properties│
        │ methods   │
        └─────┬─────┘
              │
           extends
              ↓
        Child Class
        ┌───────────┐
        │ own things│
        │ + inherited│
        └───────────┘


✅✅1. Basic Example

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(`${this.name} is eating`);
    }
}

➡️Now create a child class:

class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} says Woof!`);
    }
}



➡️Here:
Animal → Parent class
Dog    → Child class

Dog inherits:
name
eat()
from Animal.



✅✅2. Using the Child Class

const dog = new Dog("Tommy");
dog.eat();  // inherited method
dog.bark(); // Dog's own method

Output:
Tommy is eating
Tommy says Woof!

Notice that we didn't define eat() inside Dog.
It came from Animal.



✅✅3. extends
The keyword used for inheritance is:
extends

class Dog extends Animal {
}

Meaning:
Dog inherits from Animal.



✅✅4. Child Can Have Its Own Properties and Methods


class Animal {
    eat(): void {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(breed: string) {
        super();
        this.breed = breed;
    }


    bark(): void {
        console.log("Woof!");
    }
}

➡️Now Dog has:

Dog
 ├── breed       ← own property
 ├── bark()      ← own method
 └── eat()       ← inherited


✅✅5. super()
When a child class has a constructor, it must call:
super();

➡️before using this.
Example:
class Animal {
    name: string;


    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

➡️Here:
super(name);
calls the parent class constructor.


Think:
new Dog("Tommy", "German Shepherd")
             ↓
       Dog constructor
             ↓
       super("Tommy")
             ↓
     Animal constructor
             ↓
       name = "Tommy"



✅✅6. Method Overriding
A child class can provide its own version of a parent method.

class Animal {
    makeSound(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

➡️Now:
const dog = new Dog();
dog.makeSound();

Output:
Woof!

The child's method overrides the parent's method.



✅✅7. super.method()
Sometimes the child wants to use the parent's method as well.

class Animal {
    makeSound(): void {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        super.makeSound();
        console.log("Woof!");
    }
}

Output:
Animal sound
Woof!

Here:
super.makeSound();
calls the parent's method.



✅✅8. Protected + Inheritance
Remember protected from access modifiers?
It is particularly useful with inheritance.

class Animal {
    protected name: string;


    constructor(name: string) {
        this.name = name;
    }
}


class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} says Woof!`);
    }
}

name cannot be accessed directly from outside:
const dog = new Dog("Tommy");
dog.name; // ❌

But the child class can access it:
this.name; // ✅


✅✅9. Why Use Inheritance?
Code reuse

Instead of writing:
Dog → eat()
Cat → eat()
Bird → eat()

we can put common behavior in:

Animal
  │
  ├── eat()
  │
  ├── Dog
  ├── Cat
  └── Bird
Real-world example
             Vehicle
                │
        ┌───────┼───────┐
        ↓       ↓       ↓
       Car     Bike    Truck

Common properties/methods:

Vehicle
 ├── speed
 ├── start()
 └── stop()

Then:

Car
 └── openTrunk()


Bike
 └── kickStart()


Truck
 └── loadCargo()
Quick Revision


*/