/* 

✅✅✅Polymorphism, overriding and overloading
https://phi-lab-next.vercel.app/lab/oop/polymorphism

✅Polymorphism is the ability of a single call to behave differently depending on the runtime type of the object receiving it.
✅Overriding is a subclass replacing a method it inherited. 
✅Overloading is one method accepting several different argument shapes — in TypeScript, several signatures backed by exactly one implementation.

In plain words
One instruction, many answers. Say "take the fare" to cash, bKash and a pass, and each does its own thing. Overloading in TypeScript is signatures only — never two bodies.


➡️Real life first
"Bhai, take the fare"
You get off at your stop and say the same four words every time: "bhai, take the fare".

What happens next depends entirely on who is listening.
Cash: he takes the note and hands back change.
bKash: he reads out a number and waits for the confirmation SMS.
A monthly pass: he glances at the card and waves you on.
You did not change your sentence. You did not need to know which one he uses. One instruction, different behaviour depending on the receiver — that is polymorphism, and it is the reason your code can loop over a list of payments and just call .pay() on each.

The word is Greek: poly (many) + morph (form). Many forms of the same instruction.



*/


//📌📌poly means many, morp=form  => polymorp= many form of a method

//➡️Here, makesound() is the method which used in 3 places (Animal,cat,dog), but behaves differently
//so makesound() is overrided here, and this process is called polymorphism.

//parent class
class Animal { 
    private _name:string;


    constructor (name:string){
        this._name=name;
    }


    makesound ():void{
        console.log("Animal can make sound");
        
    }

}


//cat -child class
class Cat extends Animal {

    makesound(): void { //overrided here
        console.log("Miaawwwwwwwwwwwwwwww");
        
    }
}
const cat= new Cat("Tommy");
// console.log(cat);  //Cat { _name: 'Tommy' }

// cat.makesound();//Animal can make sound  -before overriding makesound inside CAT
cat.makesound();//Miaawwwwwwwwwwwwwwww - after overriding makesound()



//Dog -child class
class Dog extends Animal{
    makesound(): void { //overrided here
        console.log("Ghew ghew");
        
    }
}
const dog = new Dog("Kallu");
dog.makesound(); //Ghew ghew

 






//Ex-2

class Shape {
    area():number{
        return 0;
    }
}



//circle
class Circle extends Shape {
    private _radious :number;

    constructor(radious:number){
        super();    // When a child class has a constructor, it must call:super() , before using (this).
        this._radious=radious;
    }

    area(): number {
        return 3.1416*this._radious*this._radious;
    }
}

const cirle =new Circle(5);
console.log(cirle.area()); //78.54


//rectangle
class Rectangle extends Shape{
    private _height :number
    private _width :number

    constructor(height:number, width:number){
        super();
        this._height=height;
        this._width=width;
    }

    area(): number {
        return this._height *  this._width;
    }

}
const rectangle=new Rectangle(4,5);
console.log(rectangle.area()); //20





// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:
/* 

✅✅✅Polymorphism & Method Overriding in TypeScript

✅✅Polymorphism vs Method Overriding
These concepts are related but not the same.

| Method Overriding                         | Polymorphism                                     |
| ----------------------------------------- | ------------------------------------------------ |
| Child replaces/customizes parent's method | Same interface/method behaves differently        |
| Mechanism/technique                       | OOP concept/behavior                             |
| Uses inheritance                          | Can be achieved through different techniques     |
| Example: `Dog.makeSound()`                | `animal.makeSound()` producing different results |



✅✅1. Polymorphism
Polymorphism means "many forms."

In OOP, it means the same method/interface can behave differently depending on the object.
A common way to achieve polymorphism in TypeScript is through method overriding.


Real-world example
Animal
  │
  ├── Dog → bark sound
  ├── Cat → meow sound
  └── Cow → moo sound

All animals have:
makeSound()
➡️But each animal behaves differently.


✅✅2. Method Overriding
Method overriding happens when a child class provides its own implementation of a method inherited from the parent class.

Example
class Animal {
    makeSound(): void {
        console.log("Some animal sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}


➡️Here:
Animal
  ↓
makeSound()

Dog
  ↓
overrides makeSound()


Cat
  ↓
overrides makeSound()



✅✅ Polymorphism in Action
We can use the parent type:

const animals: Animal[] = [
    new Dog(),
    new Cat()
];

animals.forEach(animal => {
    animal.makeSound();
});


➡️Output:
Woof!
Meow!

The important part is:
animal.makeSound();

The same method call produces different behavior:
Dog object → Woof!
Cat object → Meow!

That's polymorphism.




✅✅ How Does It Work?
                 Animal
                    │
              makeSound()
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
        Dog                  Cat
          │                   │
    makeSound()          makeSound()
          │                   │
        "Woof!"              "Meow!"


➡️The parent defines the common behavior/interface:
class Animal {
    makeSound(): void {
        console.log("Some sound");
    }
}

➡️Children customize it:
class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}



✅✅ super with Method Overriding
A child can also call the parent's version.

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
Animal sound  //parent's property
Woof!  //child's property

➡️Here:
super.makeSound();
calls the parent implementation.



*/