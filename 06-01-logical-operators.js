// we have TRUTHY STATEMENT AND COMPOUND STATEMENT.
/* 
    TRUTY STATEMENT
    this are the statement that requires true or false.

    COMPOUND STATEMENT
    This are the combination of a truty statement

 */

// Not Operator (!)
console.log(!true);

/* 
    TRUTY VALUE IN JAVASCRIPT
    1, 2, 33, " ", true etc evaluates to true
     null, undefined, "", 0, false, etc evaluates to false
 */


let trutyValue = Boolean(5);
console.log(!trutyValue);

// AND Operator (&&) it only returns true if both of them are true. else false
console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log((20 + 5) && (12 * 0));

// OR Operators (||) it only returns false if both of them are false. else true
console.log("" || (12 * 5));
console.log(500 || "no value provided");

// Nullish Coarescing (??) it helps provide an alternative value when something is null or undefined
console.log(null ?? "use this when data is null");
console.log(undefined ?? "use this data when undefined");

/* 
Examples

Expression
Output

false && "hello"
false

0 && "hello"
0

"" && "hello"
""

true && "hello"
"hello"

5 && "hello"
"hello
*/

// order of precedence of Logical opreators
/* 
    1st- ! (NOT) 
    2nd - && (OR)
    3rd - ?? (Nullish Coalscing)

 */

/*   
If a is falsy → return a.

If a is truthy → return b.
*/

/*
    || → Return the first truthy value. If none are truthy, return the last value.

    && → Return the first falsy value. If all values are truthy, return the last value.
*/
const a = 0;
const b = "hello";
const c = null;

console.log(a || b && c);

const username = undefined;
const defaultName = "Guest";

console.log(username || defaultName);

const value1 = null;
const value2 = 100;
const value3 = "Hello"

console.log(value1 || value2 && value3);