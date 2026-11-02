// IMPLICIT TYPE CONVERSION

// String coersion
console.log("55" + 89);
console.log("55" + null);
console.log("55" + true);

// Numeric Coersion
console.log("55" / 5);
console.log("55" * 5);
console.log("55" - 5);
console.log("55" % 5);
console.log(true - 5);
console.log("55" - 5);

// Boolean Coersion
console.log("" || 55);
console.log(true && "hello");

// EXPLICIT CONVERSIONS

// - Number Conversion

// 1. Number
let userAge = "75";
console.log(typeof userAge);

userAge = Number(userAge);
console.log(typeof userAge);
console.log(Number("70")) /* 70 */
console.log(Number("70.998")); /* 70.998 */

// 2. parseint()  passes a string and returns an integer
console.log(parseInt("34")); /* 34 */
console.log(parseInt("45.67")); /* 45 */

// 3. parseFloat
console.log(parseInt("45.67")); /* 45.67 */


// - String Conversion

    // 1. String()
console.log(String(true)); /* "true" */
console.log(String(35)); /* "35" */

    // toString()
console.log((57).toString());
let isLoggedIn = true;
console.log(isLoggedIn.toString())

// - Boolean Conversion
    // 1. Boolean()
    console.log(Boolean(1)); /* true */
    console.log(Boolean(null)); /* false */
    console.log(Boolean(70)); /* true */
    console.log(Boolean("true")); /* true */
    console.log(Boolean(76 > 100)); /* false */

    // 2. Double NOT (!!)
    console.log(!!" "); /* true */
    console.log(!!5); /* true */
    console.log(!!0); /* true */

// OBJECT CONVERSION
        // 1. Stringify
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: "26",
        role: "senior backend dev"

    };

    const personString = JSON.stringify(person);
    console.log(personString);

        // 2. parse
    const personObj = JSON.parse(personString);
    console.log(personObj)
    console.log(personObj.role)




