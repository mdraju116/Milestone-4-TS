/* 
📌📌https://phi-lab-next.vercel.app/lab/oop/access-modifiers

✅✅✅Encapsulation and access modifiers

✅Encapsulation is the practice of hiding an object's internal state and exposing it only through a controlled interface.
✅An access modifier is the keyword that enforces accesses: 
public allows access from anywhere, private restricts it to the declaring class, and protected allows the declaring class and its subclasses.

In plain words
Decide what stays inside and what you hand out. Balance is public, PIN is private, transaction history is protected. Write nothing and you get public by default.


➡️➡️The bKash agent
Think about what a bKash agent can and cannot do with your account.

Your balance — you can see it, the agent can see it on the receipt. Public.
Your PIN — nobody sees it. Not the agent, not the shopkeeper, not even the app's own screen. Private.
Your transaction history — the agent cannot read it, but bKash's internal support team can. That is the in-between case.
A class works the same way, with three words:


➡️Word Who can touch it
public	Anybody. The default if you write nothing.
private	Only code inside this exact class.
protected	This class and any class that extends it — the family.

Encapsulation is the name for the decision itself: choosing what stays inside and what you hand out.


*/
//📌📌Among the three access modifier: we should use private in most of the cases. Rarely use public/protected         
class bkashAccount {
    public phone:string
    private balance:number
    private pin : number
    protected transaction:string

    constructor(phone:string,balance:number, pin:number, transaction:string ){
        this.phone=phone;
        this.balance=balance
        this.pin=pin
        this.transaction=transaction
    }

    //method to access the internal properties (only show, can't modify)
     getBalance(pin:number){
        if(this.pin===pin){
            return this.balance;
        }
        return "Pin is Wrong";
    }
    
}

const user1 =new bkashAccount("0152150210",5000,1234,"Successful" )
console.log(user1); //bkashAccount {phone: '0152150210', balance: 5000, pin: 1234, transaction: 'Successful'}

// user1.balance=0;  //Here We can't access the internal properties from outside like (class-23-3)
// user1.phone=0; //We can access phone, because it is still public property


//to access the internal property we need extra method
console.log(user1.getBalance(123));//Pin is Wrong
console.log(user1.getBalance(1234));//5000





// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌gpt notes:
/* 

✅✅✅Encapsulation & Access Modifiers in TypeScript

✅✅. Encapsulation
Encapsulation means bundling data and methods together inside a class and controlling how that data can be accessed or modified.

In simple words:
Keep data protected inside the class and provide controlled ways to access it.

➡️Example
class BankAccount {
    private balance: number = 0;


    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

➡️Usage:
const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500

➡️But:
account.balance = 10000;
❌ Error because balance is private.

So the class controls how balance can be changed.


Outside
   │
   │ deposit()
   ▼
┌─────────────────────┐
│   BankAccount       │
│                     │
│ private balance     │ ← Protected
│                     │
│ deposit()           │
│ getBalance()        │
└─────────────────────┘



✅✅✅2. Access Modifiers
Access modifiers determine where class properties and methods can be accessed.

TypeScript has three main access modifiers:
public
private
protected

✅Comparison

| Modifier    | Same class | Child class | Outside |
| ----------- | ---------- | ----------- | ------- |
| `public`    | ✅          | ✅           | ✅       |
| `protected` | ✅          | ✅           | ❌       |
| `private`   | ✅          | ❌           | ❌       |





✅✅a. public
public means the property/method can be accessed from anywhere.
It is also the default access modifier.

class Student {
    public name: string = "Raju";


    public study(): void {
        console.log("Studying");
    }
}

➡️You can access them outside:
const student = new Student();
console.log(student.name); // ✅
student.study();           // ✅


These are equivalent:
name: string;

and:
public name: string;


✅✅b. private
private means the property/method can be accessed only inside the same class.

class BankAccount {
    private balance: number = 0;


    deposit(amount: number): void {
        this.balance += amount; // ✅
    }
}

➡️Outside:
const account = new BankAccount();
account.balance; // ❌ Error

The data is hidden from outside code.

✅✅c. protected
protected means it can be accessed:

➡️Inside the same class
Inside classes that inherit from it
class Animal {
    protected name: string;


    constructor(name: string) {
        this.name = name;
    }
}

➡️Child class:

class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} says Woof!`); // ✅
    }
}


➡️But outside:
const dog = new Dog("Tommy");
dog.name; // ❌ Error





✅✅ Encapsulation in Practice
A common pattern is:

class BankAccount {
    private balance: number = 0;
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

Usage:
const account = new BankAccount();
account.deposit(1000);
account.withdraw(300);
console.log(account.getBalance()); // 700

The outside code cannot directly manipulate the balance:
account.balance = -5000; // ❌



Instead, it must use:
account.deposit();
account.withdraw();
account.getBalance();


That's encapsulation.



*/