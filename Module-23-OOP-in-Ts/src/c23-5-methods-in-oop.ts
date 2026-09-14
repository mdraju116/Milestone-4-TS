
/* 
📌📌https://phi-lab-next.vercel.app/lab/oop/methods

✅✅Method : Formal definition
A method is a function defined inside a class, which runs on a particular instance and can reach that instance's own fields through (this) keyword.

In plain words
A function that belongs to the object. order.total() asks the order for its own total — nobody has to hand the order to anything.


➡️The tong shop
At the tea stall outside your campus, you do not walk behind the counter, find the sugar, count the spoons and stir it yourself. You say "mama, ek cup cha" and the shop does the rest.
The shop owns the kettle, the sugar and the condensed milk. It also owns the knowledge of how to combine them. You just send an instruction.

A method is exactly that instruction. order.addItem("cha") is you saying it; the object knows what to do because the data and the knowledge live together.
Compare it to the alternative: addItem(order, "cha") — a stranger reaching over the counter into someone else's sugar jar.


*/

//Ex-1 : Student
class Student3 {  
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

    //method
    getInfo (){  //Advantage of this method : Memory will not allocate space for this method when I will call the object, rather, It will only allocated memory when I will call objName.getInfo()
        const info =` Name: ${this.name}\n age: ${this.age}\n email: ${this.email}`
        return info;
    }

}

const rafi=new Student3("Rafi",20,"rafi@gmail.com",80);
// console.log(rafi); //Student2 { name: 'Rafi', age: 20, email: 'rafi@gmail.com', marks: 80 }

const sadik=new Student3("Sadik",22,"sadik@gmail.com",90);
// console.log(sadik); ////Student2 { name: 'Sadik', age: 22, email: 'sadik@gmail.com', marks: 90 }


//calling method
// console.log(rafi.getInfo()); //getInfo allocated memory here, not at line 45.
// output:
// Name: Rafi
// age: 20
// email: rafi@gmail.com

// console.log(sadik.getInfo());





//Ex-2 : Shop
class Shop {
    title:string
    address:string
    soldItems:any =[]

    //constructor method to receive user Input
    constructor (title:string,address:string){
        this.title=title;
        this.address=address;
    }

    //method to get items and push them to soldItems
    buy(itemName:string,price:number){
        // this.soldItems.push(itemName,price) //this will show => soldItems: [ 'Tea', 10 ]
        this.soldItems.push({itemName,price}) //this will show => soldItems: [ { itemName: 'Tea', price: 10 } ]
    }

    //method to calculate total price
    totalSold(){
        const total=this.soldItems.reduce((acc:number,item:any)=>acc+item.price,0)
        return total;
    }

}

//shop1
const shop1 = new Shop("TeaShop","Dhaka");
// console.log(shop1);//Shop { title: 'Tea', address: 'Dhaka', soldItems: [] }
shop1.buy("Tea",10);
// console.log(shop1);//Shop {title: 'Tea',address: 'Dhaka',soldItems: [ { itemName: 'Tea', price: 10 } ]  }


//shop2
const shop2=new Shop("MudiDokan","Gazipur");
shop2.buy("Biscuit",50);
shop2.buy("Cake",20);
console.log(shop2); //Shop {title: 'MudiDokan',address: 'Gazipur',soldItems: [ { itemName: 'Biscuit', price: 50 },{ itemName: 'Cake', price: 20 } ]  }
console.log(shop2.totalSold()); //70


 


// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:
/* 

✅✅Methods in OOP
A method is simply a function that belongs to a class or object.

➡️Function vs Method
// Function
function greet() {
    console.log("Hello");
}
// Method
class Student {
    study() {
        console.log("Studying...");
    }
}

📌Function
 ↓
Independent

📌Method
 ↓
Inside an object/class



✅✅Why Methods?
Methods define the behavior of an object.

Example:

Student
 ├── name
 ├── age
 ├── study()
 └── sleep()
 
📌Properties → What an object HAS
📌Methods    → What an object DOES


➡️Example 1: Student Class
class Student {
    name: string;


    constructor(name: string) {
        this.name = name;
    }


    study(): void {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Raju");
student1.study();

Output:
Raju is studying

Here:
study()
 ↓
Method


➡️Example 2: Multiple Methods
class Car {
    brand: string;


    constructor(brand: string) {
        this.brand = brand;
    }


    start(): void {
        console.log(`${this.brand} started`);
    }


    stop(): void {
        console.log(`${this.brand} stopped`);
    }
}

Usage:
const car = new Car("Toyota");
car.start();
car.stop();

Output:
Toyota started
Toyota stopped


✅✅Methods Using Properties
Methods often use the object's data through this.

class Person {
    name: string;


    constructor(name: string) {
        this.name = name;
    }


    introduce(): void {
        console.log(`My name is ${this.name}`);
    }
}
const person = new Person("Raju");
person.introduce();


Output:
My name is Raju
this

this
 ↓
Current object/instance


✅✅Method with Parameters
Methods can accept parameters.

class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
}

Usage:
const calc = new Calculator();
console.log(calc.add(10, 20));

Output:
30

✅✅Method Returning a Value

class Rectangle {
    area(length: number, width: number): number {
        return length * width;
    }
}

➡️Real-Life Analogy
Mobile Phone
 │
 ├── brand
 ├── model
 │
 ├── call()
 ├── message()
 └── takePhoto()

brand, model
 ↓
Properties


call(), message(), takePhoto()
 ↓
Methods

*/