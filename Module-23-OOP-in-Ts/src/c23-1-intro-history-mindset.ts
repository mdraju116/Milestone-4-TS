
/* 
//📌simple class notes:

✅✅History of Simula-1960-Norway
Simulation of ships in a port. (fuel, )



✅✅What is OOP ?
//We previously learned/programming in procedural way / functional way
//OOP-Object Oriented Programing is a way of programming



✅✅OOP has 4 pillars -i.e- oop was born to solve four problems
1. Encapsulation
Data এবং Behavior-কে একসাথে রাখা এবং Data-এর Access Control করা।

2. Inheritance
একটি Class-এর বৈশিষ্ট্য অন্য Class-এ Reuse করা।

3. Polymorphism
একই Interface বা Method বিভিন্ন ক্ষেত্রে বিভিন্নভাবে কাজ করতে পারা।

4. Abstraction
Complex Implementation লুকিয়ে রেখে প্রয়োজনীয় অংশটুকু সামনে রাখা।

✅✅Why was OOP introduced?
1.Models the real world
2.Hides complexity
3.Reuses code
4.Scales with teams


✅✅Where oop needs -
1. Big complex systems
2.team collaboration
3.code that changes often
4.Simualtions and games


✅✅where oop don't need
 - in simple project
 -normal function
 -----


✅✅initial commands to create and run ts file
To create tsconfig : npx tsc--init
To convert ts to js : tsc 
To run file : node ./dist/classes/index.js

To run without converting/tsc - install => npm i -g tsx
then only type everytime :  tsx ./src/classes/index.ts


*/

const name:string ="Hello World";
console.log(name);



// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################

//📌gpt Note :
/* 
✅✅✅Object-Oriented Programming (OOP)


✅✅History of OOP
Simula was developed around 1960 in Norway by Ole-Johan Dahl and Kristen Nygaard.
It was originally created for simulation, such as simulating ships in a port.
Simula introduced important ideas that later became fundamental to Object-Oriented Programming.


✅✅What is OOP?
OOP (Object-Oriented Programming) is a programming paradigm where programs are designed around objects that contain:

Data → properties/state
Behavior → methods/functions

Previously, we often wrote programs using:
Procedural programming
Functional programming

OOP provides another way of organizing and designing programs.

Simple idea
Object
  │
  ├── Data / Properties
  │      ├── name
  │      └── age
  │
  └── Behavior / Methods
         ├── eat()
         └── sleep()
         

✅✅Why was OOP introduced?
OOP helps solve several problems in large software systems:

1. Models the real world
Real-world entities can be represented as objects.

Car
 ├── color
 ├── brand
 └── speed


 ├── start()
 ├── stop()
 └── accelerate()


2. Hides complexity
Users don't need to know every internal detail.

Car
 ↓
start()
 ↓
Engine starts internally
We simply call start() without worrying about the internal implementation.

3. Reuses code
Existing classes and objects can be reused through mechanisms such as inheritance and composition.

4. Makes large systems easier to manage
OOP helps organize large codebases into smaller, related components, which can make team development and maintenance easier.


✅✅Where is OOP useful?

OOP is particularly useful for:
Large and complex systems
Team-based development
Projects that change and grow frequently
Games and simulations
Applications with many interacting entities


Examples:
Banking System
E-commerce
Hospital Management
Game Development
Flight Simulation


✅✅Where OOP may not be necessary
OOP isn't required for every project.

For simple tasks, procedural or functional programming may be easier:

Simple Calculator
Small Script
One-time Data Processing
Simple Utility

For example:

function add(a: number, b: number): number {
    return a + b;
}
Creating a class just to perform this simple operation would probably be unnecessary.




✅✅The 4 Pillars of OOP
These are the actual four pillars:

             OOP
              │
    ┌─────────┼─────────┐
    │         │         │
Encapsulation Abstraction
    │         │
Inheritance ──┼── Polymorphism

1. Encapsulation
Bundle data and methods together and control access to them.

2. Abstraction
Hide unnecessary implementation details and expose only what is needed.

3. Inheritance
Create a new class based on an existing class.

4. Polymorphism
Allow the same interface/method to behave differently in different situations.




Easy memory trick
E-A-I-P → Encapsulation, Abstraction, Inheritance, Polymorphism



*/