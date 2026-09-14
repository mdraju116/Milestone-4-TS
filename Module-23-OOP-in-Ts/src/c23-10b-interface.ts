
/* 
✅✅Interface
An interface is a type that describes the members a value must have, without providing any implementation. A class states that it satisfies an interface with implements, and the compiler then checks every declared member. Interfaces exist only at compile time and are erased from the emitted JavaScript.

In plain words
A contract with no code in it. A class can sign as many as it likes, unlike extends which allows one parent. Because it is erased, x instanceof MyInterface cannot work.


➡️The delivery contract
Daraz does not own delivery riders. It signs contracts with Pathao, RedX, Steadfast and others. The contract says, in effect:
Whoever you are, you must be able to (1) accept a parcel, (2) give me a tracking code, (3) tell me the delivery charge for a district.
Daraz does not care how you do any of it. Pathao uses bikes, RedX uses vans, another uses buses. The contract only lists what must be possible, never how.
That contract is an interface. A company that signs it implements the interface. And because Daraz's software only ever talks to the contract, adding a fifth courier tomorrow requires no change to Daraz's code at all.


*/

// Interface
//     ↓
// Defines WHAT must exist
//     ↓
// Contract / Structure
//     ↓
// class implements Interface



interface User {
    name: string;
    age: number;
    login(): void;
}

class Student implements User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    login(): void {
        console.log("Logged in");
    }
}





// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:
/* 
✅✅Interface in TypeScript
An interface is a TypeScript feature used to define the structure/contract that an object or class must follow.

In simple words:
Interface tells us what something should have, but not how it should work.

✅✅1. Basic Interface
interface User {
    name: string;
    age: number;
}

Now an object using User must have name and age:
const user: User = {
    name: "Raju",
    age: 25
};

This is valid:
const user: User = {
    name: "Raju",
    age: 25
};

But:
const user: User = {
    name: "Raju"
};
❌ Error because age is missing.


And:
const user: User = {
    name: "Raju",
    age: "25"
};
❌ Error because age must be a number.



✅✅2. Interface with Methods
An interface can also define methods.

interface Animal {
    name: string;
    makeSound(): void;
}


A class can implement this interface:
class Dog implements Animal {
    name: string;


    constructor(name: string) {
        this.name = name;
    }


    makeSound(): void {
        console.log("Woof!");
    }
}

Here:
Animal interface
       ↓
     contract
       ↓
      Dog
       ↓
must have:
 ├── name
 └── makeSound()



✅✅3. implements

The keyword: implements
means:"This class promises to follow this interface."


class Dog implements Animal {
    // must follow Animal structure
}

If you forget a required property/method:
class Dog implements Animal {
    name: string = "Tommy";
    // makeSound() missing ❌
}
TypeScript gives an error.



✅✅4. Interface vs Abstract Class
This is an important TypeScript topic.

➡️Interface
interface Animal {
    name: string;
    makeSound(): void;
}
It mainly defines a contract/structure.


➡️Abstract class
abstract class Animal {
    name: string;
    abstract makeSound(): void;
    eat(): void {
        console.log("Eating...");
    }
}

➡️An abstract class can contain actual implementation.

| Interface                                 | Abstract Class                    |
| ----------------------------------------- | --------------------------------- |
| Defines a contract                        | Defines a base class              |
| Uses `implements`                         | Uses `extends`                    |
| Normally no method implementation         | Can have implemented methods      |
| No constructor implementation             | Can have constructor              |
| A class can implement multiple interfaces | A class can extend only one class |



✅✅5. Multiple Interfaces
A class can implement multiple interfaces.

interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Duck implements Flyable, Swimmable {
    fly(): void {
        console.log("Duck is flying");
    }


    swim(): void {
        console.log("Duck is swimming");
    }
}


Here:
Flyable ─────┐
             ↓
          Duck
             ↑
Swimmable ───┘

This is one advantage of interfaces.



✅✅6. Optional Properties
Interfaces can have optional properties using ?.

interface User {
    name: string;
    age?: number;
}

Now both are valid:
const user1: User = {
    name: "Raju"
};

const user2: User = {
    name: "Rahim",
    age: 25
};


✅✅7. Readonly Properties
You can prevent a property from being changed after initialization:

interface User {
    readonly id: number;
    name: string;
}
const user: User = {
    id: 101,
    name: "Raju"
};

user.name = "Rahim"; // ✅
user.id = 102;       // ❌


✅✅8. Interface Can Describe Functions
interface Add {
    (a: number, b: number): number;
}

Then:
const add: Add = (a, b) => {
    return a + b;
};


✅✅9. Interface vs Type Alias
You can define objects using both.

➡️Type alias
type User = {
    name: string;
    age: number;
};


➡️Interface
interface User {
    name: string;
    age: number;
}
For simple object structures, they can look very similar.



➡️A major feature of interfaces is that they can be extended and merged.
interface User {
    name: string;
}

interface User {
    age: number;
}


TypeScript treats them together as:
interface User {
    name: string;
    age: number;
}


*/