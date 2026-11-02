/*
1. if statement
The most basic control-flow statement is:
if (condition) {
    // code to execute
}
For example:
const age = 30;

if (age >= 18) {
    console.log("You are an adult."); output: You are an adult.
}

/*
2. The condition
Look at:
if (age >= 18)
The part inside the parentheses is the condition:
age >= 18
JavaScript evaluates it as either:
true
or:
false
If it's true, the code runs.
If it's false, JavaScript skips it.
For example:
const age = 15;

if (age >= 18) {
    console.log("You are an adult.");
}
Nothing is printed because:
15 >= 18
is false.
*/

/*
3. if...else statement
You can add an else clause to run code when the condition is false:
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}
For example:
const age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor."); output: You are a minor.
}

*/

/*
4. if...else if...else statement
You can add multiple conditions using else if:
if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition2 is true
} else {
    // code to execute if both conditions are false
}
For example:
const age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager."); output: You are a teenager.
} else {
    console.log("You are a child.");
}

*/

/*
5. order matters
The order of the conditions matters. JavaScript checks them in order, and stops at the first true condition.
For example:
const age = 15;

if (age >= 13) {
    console.log("You are a teenager."); output: You are a teenager.
} else if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a child.");
}
In this case, the first condition is true, so the second condition is never checked.

*/

/*
6. nested if statements
You can also nest if statements inside each other:
if (condition1) {
    if (condition2) {
        // code to execute if both conditions are true
    }
}
For example:
const age = 20;
const hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive."); output: You can drive.
    } else {
        console.log("You need a license to drive.");
    }
} else {
    console.log("You are too young to drive.");
}

/*
7. comparison operators
Comparison operators are used to compare values. Some common ones are:
- == equal to
- === equal value and equal type
- != not equal
- !== not equal value or not equal type
- > greater than
- < less than
- >= greater than or equal to
- <= less than or equal to

For example:
const age = 20;

if (age >= 18) {
    console.log("You are an adult."); output: You are an adult.
} else {
    console.log("You are a minor.");
}

*/

/*
8. strict equality (===) vs loose equality (==)
Strict equality (===) checks both value and type, while loose equality (==) checks only value and performs type coercion if necessary.

For example:
const age = "20";

if (age == 20) {
    console.log("Loose equality: You are 20."); output: Loose equality: You are 20.
}

if (age === 20) {
    console.log("Strict equality: You are 20.");
} else {
    console.log("Strict equality: You are not 20."); output: Strict equality: You are not 20.
}

*/

/*
9. !==
The !== operator checks if two values are not equal in both value and type.

For example:
const age = "20";

if (age !== 20) {
    console.log("The age is not strictly equal to 20."); output: The age is not strictly equal to 20.
} else {
    console.log("The age is strictly equal to 20.");
}
*/

/*
10. logical operators
Logical operators are used to combine multiple conditions:
- && (AND) returns true if both conditions are true
- || (OR) returns true if at least one condition is true
- ! (NOT) negates a condition

For example:
const age = 20;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive."); output: You can drive.
} else {
    console.log("You cannot drive.");
}

*/

/*
11. ternary operator
The ternary operator is a shorthand for an if...else statement:
condition ? expressionIfTrue : expressionIfFalse

For example:
const age = 20;
const message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message); output: You are an adult.

/*
12. || (OR) operator
The || operator returns true if at least one of the conditions is true.

For example:
const age = 15;
const hasPermission = true;

if (age >= 18 || hasPermission) {
    console.log("You can enter."); output: You can enter.
} else {
    console.log("You cannot enter.");
}

*/

/*
13. ! (NOT) operator
The ! operator negates a condition, turning true to false and false to true.

For example:
const isRaining = false;

if (!isRaining) {
    console.log("You don't need an umbrella."); output: You don't need an umbrella.
} else {
    console.log("You need an umbrella.");
}
*/

/*
14. Control flow with truthy/falsy values
In JavaScript, values are considered "truthy" or "falsy" in a boolean context. For example:
- Falsy values: false, 0, "", null, undefined, NaN
- Truthy values: true, 1, "hello", {}, []

For example:
const value = "";

if (value) {
    console.log("The value is truthy."); output: The value is truthy.
} else {
    console.log("The value is falsy."); output: The value is falsy.
}
*/

/*
A real-world example
Imagine a login system:
const username = "Damilare";
const password = "12345";

if (username === "Damilare" && password === "12345") {
    console.log("Login successful.");
} else {
    console.log("Invalid username or password.");
}

*/

/*
15. switch statement
The switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if...else if statements.

Syntax:
switch (expression) {
    case value1:
        // code to execute if expression === value1
        break;
    case value2:
        // code to execute if expression === value2
        break;
    default:
        // code to execute if expression doesn't match any case
}

For example:
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week."); output: Start of the work week.
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    default:
        console.log("Midweek days.");
}

Why break?
This is important.
case "Monday":
    console.log("Start of the week");
    break;
break tells JavaScript:
"I've found the matching case. Stop the switch."

Without break, JavaScript can continue executing the following cases. This behavior is called fall-through.
We'll practice switch separately.

*/

/*
16. ternary operator
The ternary operator is a shorthand for an if...else statement.
For example:
const age = 20;
const message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message); output: You are an adult.
*/

/*
17. nested ternary operator
You can nest ternary operators, but it can make the code harder to read.
For example:
const age = 20;
const message = age < 13 ? "You are a child." : age < 18 ? "You are a teenager." : "You are an adult.";
console.log(message); output: You are an adult.
*/  

/*
