
/*
📌📌 https://phi-lab-next.vercel.app/lab/oop/getters-setters
✅✅Getter and setter

✅A getter is a method marked get that is read like a property and returns a value. 
✅A setter is a method marked set that is assigned to like a property and receives the assigned value, allowing it to be validated or rejected before any field changes.

In plain words
A guard at the door of a private field. acc.balance reads like a field but runs your code; acc.balance = 50 assigns like a field but runs your check first. A getter with no setter is read-only from outside.



➡️Back at the bKash agent
Module-3(c22-6) locked the account down: pin and balance went private, and the only way to see your money was a getBalance() method. Safe — but nothing could ever be put in, and reading a number required brackets.

➡️Stand at the agent's counter again:

Reading the balance — you look at your screen, the agent looks at the receipt. No ceremony. It is just there.
Adding to the balance — you cannot type a new number in yourself. You hand cash to the agent, 
he counts it, and a torn or fake note comes straight back. Only a note he accepts changes anything.
That is a getter and a setter:

Getter — reading looks like a plain field, and may compute something on the way out.
Setter — writing looks like a plain assignment, but a guard runs first and can refuse.

The field stays private, exactly as module 3 left it. The getter and setter are the only doors, and the setter has the agent standing in it.

*/




//📌📌We should declare the private values starting with underScore, to recognize them as private by seeing their name. 

//📌📌Setter=(write) -is a method which can set a value of the private variable.
// It can receive only one parameter, // ⚠️but it can't return anything.  Instead it can throw error message.

//📌📌Getter=(read) -is a method which can only return a value. ⚠️but getter can't receive any parameter.  Without getter, setter value will show undefined

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
   
  //use setter instead of a new method - as a result you can access the private variable like a variable(user1.age) , not like function(user1.age())
    set myAge(newAge:number){ //here myAge is the function name, not a previous variable
        if(newAge<0 || newAge>100){

            throw new Error("Age is not valid");
        }
        this._age=newAge;  //assgning newValue to old one
    }



}

const user1=new User("Rafi",25,"rafi@gmail.com");
console.log(user1); //User { _name: 'Rafi', _age: 25, _email: 'rafi@gmail.com' }


//setter
// user1.age=20; //error  -before create setter
user1.myAge=30;    //no error -after create setter      //📌this (myAge) is the setter name, not the private variable name
                                                       //here setter Hides internal data, thus anyone can't access the main data directly


//getter
// console.log(user1.myAge); // undefined - before create getter
console.log(user1.myAge);  //30 - after create getter   








// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:
/*

✅✅✅Getter and Setter in TypeScript
Getters and setters are special methods used to read and modify private/protected data in a controlled way.
They are commonly used with encapsulation.

✅✅Getter vs Setter

| Getter               | Setter                  |
| -------------------- | ----------------------- |
| Reads data           | Changes data            |
| Uses `get`           | Uses `set`              |
| Must return a value  | Doesn't return a value  |
| Used like a property | Used like an assignment |
| `obj.age`            | `obj.age = 30`          |



✅✅1. Getter
A getter is used to read/access a private property.

Syntax:
get propertyName(): type {
    return this.property;
}


Example:
class BankAccount {
    private balance: number = 0;


    get getBalance(): number {
        return this.balance;
    }
}

Usage:
const account = new BankAccount();
console.log(account.getBalance);

📌Notice that we don't use ():
account.getBalance;   // ✅
account.getBalance();  // ❌

A getter looks like a property from outside, even though it is implemented as a method.



✅✅2. Setter
A setter is used to modify/update a private property in a controlled way.

Syntax:
set propertyName(value: type) {
    this.property = value;
}


Example:
class BankAccount {
    private balance: number = 0;

    set setBalance(amount: number) {
        if (amount >= 0) {
            this.balance = amount;
        }
    }

    get getBalance(): number {
        return this.balance;
    }
}

Usage:
const account = new BankAccount();
account.setBalance = 500;
console.log(account.getBalance); // 500

📌Again, no ():
account.setBalance = 500; // ✅





✅✅ Why Use Getter & Setter?

Suppose we have:
class BankAccount {
    private balance: number = 0;
}

We cannot do:
account.balance = -5000; // ❌


Instead, a setter can validate the value:
set balanceAmount(amount: number) {
    if (amount >= 0) {
        this.balance = amount;
    }
}

Now:
account.balanceAmount = 500;  // ✅
account.balanceAmount = -500; // ❌ ignored

This provides controlled access.





✅✅ Real Example

class Student {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value >= 0 && value <= 100) {
            this._age = value;
        }
    }
}

Usage:
const student = new Student(25);
console.log(student.age); // 25
student.age = 30;
console.log(student.age); // 30
student.age = -10;
console.log(student.age); // 30

The setter prevents invalid values.



✅✅ Getter + Setter + Encapsulation

This is the important connection:

        Encapsulation
             ↓
     Hide internal data
             ↓
       private property
             ↓
      ┌──────┴──────┐
      ↓             ↓
   Getter         Setter
      ↓             ↓
    Read          Modify



Example:
class User {
    private _name: string;


    constructor(name: string) {
        this._name = name;
    }


    get name(): string {
        return this._name;
    }


    set name(value: string) {
        if (value.length >= 3) {
            this._name = value;
        }
    }
}
const user = new User("Raju");
console.log(user.name); // Raju
user.name = "Rahim";    // ✅
user.name = "A";       // ❌ rejected


Getter = controlled reading. 
Setter = controlled writing. 
Together, they are a common way to implement encapsulation.


*/