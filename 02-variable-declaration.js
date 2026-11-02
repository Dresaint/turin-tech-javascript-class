// two things about naming variables
// 1. Declaration
// 2. Assignment
// example
// var myName = "john doe";  
// let count

// var alloas us to re-declare and re-assign a variable
var fullName = "John Doe";
// re-declared
var fullName = "Drey Saint"

// re-assigned
fullName = "Amanda Sax"
console.log(fullName)


// let
// - it is block scoped
// - it can be reassigned
// - it cannot be redeclared
// it allows declaring a variable without reassignment

// reassigned
let count = 10;
count = 15;
console.log(count) 

// declaring a variable without reassignment
let age;
console.log(age);


// const

// - it is block scoped
// - it does not support reassignment
// - it does not support redeclaration
// - it does not allows declaring a variable without reassignment


// scoping

// var has a function scope
// let and const have a block scope
// a block is anything inside a curly brace { }

// Global
// local - function or block

let userName = "John Doe"
var isUserLoggedIn = true

{
    console.log(userName)
    const person = "John Williams"
    console.log(person)
}



