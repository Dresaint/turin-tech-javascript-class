/*
Primitive = Immutable
Non-Primitive = Mutable
*/

// Object]


const person = {
    name: "John Doe",
    age: 
    26,
}

person.role = "Data Engineer"
console.log(person)

// array
const letters = ["a", "b", "c", "d"];
letters.pop();
console.log(letters);

// PRIMITIVE
let myLuckyNumber = 5;
myLuckyNumber *= 6;
console.log(myLuckyNumber)

let userName = "MATTHEW";
userName.toLocaleLowerCase();
console.log(userName);

// properties can hold primitive and non-primitive data types while methods holds functions()
/*
Primitive Data Types

Primitive values are the simplest values in JavaScript.

There are 7 primitive data types:

String
Number
Boolean
Undefined
Null
BigInt
Symbol


Non-Primitive Data Types

Nonygk, ,.k, ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,kk,kk ,  ,.          primitives are collections of values.

Examples:

Object
Array
Function


Part 2: Immutability

This is where many beginners get confused.

Immutable means:

The value itself cannot be changed.

All primitive values are immutable.

Example 1
let name = "Saint";

Can we change the first letter?

name[0] = "P";

console.log(name);

Output

Saint

It DID NOT change.

Why?

Because strings are immutable.



Rule

Every primitive is immutable.



Non-Primitives are Mutable

Objects and arrays CAN be changed.

Example

let person = {
    name: "Saint",
    age: 20
};

Let's change the age.

person.age = 21;

console.log(person);

Output

{
   name: "Saint",
   age: 21
}

Notice...

We did NOT replace the whole object.

We changed one property.

That is mutability.

Another example

let colors = ["red", "blue"];

Add another color.

colors.push("green");

console.log(colors);

Output

["red","blue","green"]

The SAME array changed.

Think of it like this

Primitive

A piece of paper

Name:
Saint

If you want another name...

You throw away the paper.

Write a new one.

Object

Notebook

Name: Saint
Age:20
City:Lagos

You can erase only the age.

Name: Saint
Age:21
City:Lagos

Same notebook.


*/