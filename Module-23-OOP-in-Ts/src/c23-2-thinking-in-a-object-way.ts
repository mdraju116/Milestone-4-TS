/* 
//📌📌https://phi-lab-next.vercel.app/lab/oop

✅✅Formal definition : Object
An object is a value that groups related data together as a set of key–value pairs, where each key is called a property and each property holds its own value.
In plain words
One box holding several labelled things. rafi.name means "open the box called rafi, read the label name". The label is the property, what is written on it is the value.


✅Loose papers, or one folder
Think about your own admission paperwork. Your name on one slip, your roll on another, your marks on a third, your photo somewhere in your bag.
Nothing is wrong with that. Every piece of information exists. But the moment somebody says "pass me your file", you are in trouble — there is no file. There are five loose papers you have to gather and hope you did not miss one.
Now picture the same five papers in a single folder with your name on it. "Pass me your file" becomes one movement. Hand it over, and everything about you goes together.
*/

// A variable is a loose paper. An object is the folder.


// ➡️Five loose variables
let studentName = "Rafi";
let studentRoll = 27;
let studentBatch = "B14";
let studentMarks = 78;
let studentPresent = true;

// Show one student.
console.log(studentName, studentRoll);

// Now a second student.
let studentName2 = "Sadia";
let studentRoll2 = 31;
let studentBatch2 = "B14";
let studentMarks2 = 91;
let studentPresent2 = true;

// And a third...
// Ten students means fifty variables,
// and no way to say "this one student".


//➡️ One object each

const rafi = {
  name: "Rafi",
  roll: 27,
  batch: "B14",
  marks: 78,
  present: true,
};

const sadia = {
  name: "Sadia",
  roll: 31,
  batch: "B14",
  marks: 91,
  present: true,
};

console.log(rafi.name, rafi.roll);

// Ten students is one array of ten
// objects — and each one is a "thing".
const students = [rafi, sadia];

// Look at what the left side cannot do. It cannot hand one student to a function, cannot put students in an array, 
// and cannot stop you mixing `studentName` with `studentRoll2`. The names carry the grouping only in your head —
// the language knows nothing about it.



/*
✅So objects solved everything? No.
Objects fixed the grouping problem. They introduce three new ones, and every one of them is the reason the next eleven modules exist.

1. Nothing guarantees the shape.
You write three rickshaws by hand. The third one you type diver instead of driver, or forget rent entirely. Nothing complains. Later rickshaw.rent is undefined and the bug surfaces somewhere else entirely.

2. You repeat yourself, forever.
Three hundred rickshaws means typing the same five property names three hundred times. There is no single place that says "a rickshaw has exactly these properties".

3. The behaviour lives somewhere else.
An object holds data. It does not do anything. So the code that works on a rickshaw ends up as loose functions elsewhere, and every one of them has to be handed the rickshaw:

function dailyTotal(r: { rent: number }, days: number) {
  return r.rent * days;
}
That works. But the rickshaw does not know its own rent calculation — a stranger does. Add ten such functions and the knowledge about rickshaws is scattered across the codebase again, exactly the mess objects were supposed to end.


✅What is missing
One place that says, once: "every rickshaw has these properties and can do these things" — and then stamps out as many as you like from it.

It is called a class, and it is what modules 0 and 1 build up to — first why it is worth having, then how to write one.

*/






// ########################################⭐⭐⭐⭐⭐⭐⭐###########################################
//📌no need of gpt note

