
//✅✅✅ Class, instance and constructor
/*📌📌https://phi-lab-next.vercel.app/lab/oop/class-constructor

✅A class is a blueprint that declares what fields its objects will have. 
✅An instance is one object created from that class with the (new) keyword.
✅A constructor is the block that a class runs exactly once per instance, to give that instance its starting values.

➡️In plain words
The class is the blank card, the instance is one filled-in ID, and the constructor is the clerk who fills it in. 

✅The blank ID card
On your first day at college, the office has a stack of blank ID cards. Every card has the same printed boxes: name, roll, blood group. 
A blank card is nobody's card — you cannot show it at the gate.
When your turn comes, a clerk takes one blank card and writes your details into the boxes. Out comes a real ID. 
The next student gets another blank card with their details.
One card design. Hundreds of IDs.

The blank card is the class.
Each filled card is an object (also called an instance).
The clerk who writes in the boxes is the constructor.

That is the entire module. The rest is spelling.


✅✅Quick Revision

| Concept         | Meaning                                     |
| --------------- | ------------------------------------------- |
| **Class**       | Blueprint/template                          |
| **Instance**    | Actual object created from a class          |
| **Constructor** | Special method that initializes an instance |
| `new`           | Creates an instance                         |
| `this`          | Refers to the current instance              |

*/


//✅✅static class
class Student {  
    name:string ="rafi" 
    age:number = 20
    email:string="rafi20@gmail.com"
    marks:number=80
}

const rafi=new Student();//📌📌This is called Instantiate to create an Instance of Student()
// console.log(rafi); //Student { name: 'rafi', age: 20, email: 'rafi20@gmail.com', marks: 80 }


//📌📌Inside a class we will call every function as a method ex: Constructor method


//✅✅ Dynamic Class using Constructor
class Student2 {  
    name:string  //Declaration , this is the object key name
    age:number 
    email:string
    marks:number

    //constructor-->a special method to receive userInput (from Instance)
    constructor (name:string,age:number,email:string,marks:number){ 
        this.name=name  //this.name means the declared name,  and  (=name ) means the receiving name value from the instance
        this.age=age
        this.email=email
        this.marks=marks
    }
}

const rafi2=new Student2("Rafi",20,"rafi@gmail.com",80);
console.log(rafi2); //Student2 { name: 'Rafi', age: 20, email: 'rafi@gmail.com', marks: 80 }

const sadik=new Student2("Sadik",22,"sadik@gmail.com",90);
console.log(sadik); //Student2 { name: 'Sadik', age: 22, email: 'sadik@gmail.com', marks: 90 }


// 📌📌 This is looking same as function-object (class-23-3), 
// but there is a huge difference in structure and security







// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:
/* 
✅✅1. Class

A class is a blueprint/template for creating objects.

It defines:

Properties → data
Methods → behavior
class Student {
    name: string;
    age: number;


    study(): void {
        console.log(`${this.name} is studying`);
    }
}

Here, Student is a class.

Think of it like a blueprint:

       Student Class
       ┌─────────────┐
       │ name        │
       │ age         │
       │             │
       │ study()     │
       └─────────────┘
              ↓
        creates objects

✅✅2. Instance

An instance is an actual object created from a class.

We use new to create an instance.

const student1 = new Student();
const student2 = new Student();

Here:

Student
  ↓
Class / Blueprint
  ↓
────────────────
  ↓            ↓
student1     student2
Instance     Instance

Both student1 and student2 are instances of the Student class.

We can give them different values:

student1.name = "Raju";
student1.age = 25;


student2.name = "Rahim";
student2.age = 23;

So:

student1
 ├── name → Raju
 └── age  → 25


student2
 ├── name → Rahim
 └── age  → 23

✅✅3. Constructor

A constructor is a special method that runs automatically when an instance is created.

It is written using:

constructor()

Example:

class Student {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }


    study(): void {
        console.log(`${this.name} is studying`);
    }
}

Now we can provide values when creating the object:

const student1 = new Student("Raju", 25);
const student2 = new Student("Rahim", 23);

The constructor automatically runs:

new Student("Raju", 25)
          ↓
     constructor()
          ↓
name = "Raju"
age  = 25

✅✅4. Why this?

this refers to the current instance.

constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
}

Here:

name
 ↓
parameter


this.name
 ↓
property of the current object

So:

this.name = name;

means:

Put the constructor's name parameter into the current object's name property.


✅✅5. Complete Example
class Student {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }


    introduce(): void {
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
}


const student1 = new Student("Raju", 25);
const student2 = new Student("Rahim", 23);


student1.introduce();
student2.introduce();
Output
My name is Raju
I am 25 years old


My name is Rahim
I am 23 years old


*/