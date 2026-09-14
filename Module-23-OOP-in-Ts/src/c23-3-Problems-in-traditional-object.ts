
//✅✅We can create reusable Object using function.
//But still there are problems :

const  createStudent =(name:string,age:number,email:string,marks:number)=>{
    // const obj={name,age,email,marks};

    const obj={name,age,email,marks, forgotPass(){}} ; //✅1.everytime when I wiil call the obj, memory will allocate space for the forgotPass function and this is a problem
    return obj;                                         //see its solution in class 22-5-method
}

const rafi=createStudent("Rafi",20,"rafi20@.com",100); 
const sadik=createStudent("sadik",25,"aaaa@gmail", 80);

// rafi.marks=0;  //✅2. anyone can change the data from outside the function and this is a serious problem

console.log(rafi,sadik); //{name: 'Rafi',age: 20,email: 'rafi20@.com',marks: 100,forgotPass: [Function: forgotPass]}


//✅3.We can't validate here , this is a problem  //see solution in class -22-6-Encapsulation






// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:

/* 

✅✅✅Problems with Traditional Objects in JavaScript
Before learning classes, it's useful to understand why OOP/classes became useful.

In traditional JavaScript, we can create objects directly:

const student = {
    name: "Raju",
    age: 25,


    study() {
        console.log(`${this.name} is studying`);
    }
};

This works perfectly for small programs, but problems appear as the application grows.

✅1. Code Duplication
Suppose we need many students:

const student1 = {
    name: "Raju",
    age: 25,
    study() {
        console.log(`${this.name} is studying`);
    }
};


const student2 = {
    name: "Rahim",
    age: 23,
    study() {
        console.log(`${this.name} is studying`);
    }
};

The same structure and method are repeated.

student1 → name, age, study()
student2 → name, age, study()
student3 → name, age, study()
...

This becomes difficult to maintain.

✅✅2. Difficult to Create Many Similar Objects
If you need 100 students, manually creating 100 objects is inconvenient.

const student1 = { ... };
const student2 = { ... };
const student3 = { ... };
// ...

We need a reusable structure.

That's where a class helps:

class Student {
    constructor(
        public name: string,
        public age: number
    ) {}


    study() {
        console.log(`${this.name} is studying`);
    }
}

Now:

const student1 = new Student("Raju", 25);
const student2 = new Student("Rahim", 23);
const student3 = new Student("Karim", 24);


✅✅3. No Clear Blueprint
Traditional objects don't inherently provide a reusable blueprint.

const user = {
    name: "Raju",
    age: 25
};

Another object might accidentally have different properties:

const user2 = {
    username: "Rahim",
    email: "rahim@gmail.com"
};

With a TypeScript class/type, we can define the expected structure more clearly.



✅✅4. Initialization Can Become Repetitive
Without a constructor:

const student = {};


student.name = "Raju";
student.age = 25;
student.department = "CSE";

For many objects, this becomes repetitive.

With a constructor:

class Student {
    constructor(
        public name: string,
        public age: number,
        public department: string
    ) {}
}

We can simply:

const student = new Student("Raju", 25, "CSE");


✅✅5. Harder to Maintain Large Applications
As the number of objects and behaviors increases, managing everything as separate object literals can become messy.

Traditional Objects
        ↓
Repeated structure
        ↓
Repeated methods
        ↓
More code
        ↓
Harder maintenance

Classes help organize related:

Data + Behavior
     ↓
   Class
     ↓
 Instances


✅✅Important Point
Traditional objects are not bad. In fact, JavaScript uses objects everywhere, and object literals are often the best choice for simple data.
The problem is mainly when you have many objects with the same structure and behavior.






*/
