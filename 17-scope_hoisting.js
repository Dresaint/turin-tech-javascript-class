// SCOPE

/*
    we have three types of scope:
    1. Global Scope
    2. Function Scope
    3. Block Scope
*/

// GLOBAL SCOPE
// You can access a global variable anywhere

const name = "Damilare";

function greet() {
    console.log(name);
}
greet();

// FUNCTION SCOPE
// A variable declared inside a function is generally accessible only inside that function

function doSomething() {
    const occupation = "Software Engineer";
    console.log(occupation);

}
doSomething();

// BLOCK SCOPE
// A block is anything enclosed inside a curly brace
// Example :
// 1. conditional statement
if (true) {
    // this is a block scope
}

// 2. loops also create blocks
for (let i = 0; i < 5; i++) {
    // this is a block
}

// 3. variables declared with let and const are block scope

// this works.
if (true) {
    const message = "Hello";
    console.log(message);
}

/* this causes an error
if (true) {
    const message = "Hello";
   
}
console.log(message);

*/

// var, let and const
// var is function scoped
// let and const have block scope


// HOISTING

// Hoisting is the behaviour in Javascript where declarations are proccessed during the creation phase of an execution context before yhe code is executed

/* 
    to understand hoisting correctly, we need to look at how javascript handles:
    - var
    -let
    - const
    - function declaration
    - function expression and arrow function
*/

// HOISTING WITH VAR
// Variables declared with var are hoisted and initialized with the value undefined.
console.log(username);
var username = "maxwell";
console.log(username);

// HOISTING WITH LET AND CONST
// They are also hoisted in the sense that javascriptbcreates their bindings during the creation phase, however, they are not initialized with undefined like var.

/* console.log(namee);
 let namee = "John";

 this will outputbReferenceError.
 why?

 the variable vname exist in the scope, but it cannot be accessed before the declaration is reached during execution 

*/

// HOISTING WITH FUNCTION DECLARATION
// Function declarations are also hoisted.
// example
greet();

function greet() {
    console.log("Hello, world")
}
// the reason is that a function declared using the traditional function declaration syntax can generally be called before it's position in the code


// HOISTING WITH FUNCTIONS EXPRESSIONS AND ARROW FUNCTIONS

/*  sayHello();
    const sayHello = function() {
     console.log("Hello World")
    }
we cannot access sayHello() before initialization

*/ 

/* 
    sayHello();
    const sayHello = () => console.log("Hello World")
    
    we cannot access sayHello() before initialization
*/
