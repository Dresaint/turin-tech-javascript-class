// Sring inter;olation
const age = 20;
const firstName = "Andrew";
const message = `${firstName} is ${age} years old.`;
console.log(message);

// String concatination
console.log("Hello " + "world");
console.log("Hello" + " " + "world");

// Example of Srting concatination
{
    const intro = "I am a fast growing software engineer.";
    const firstName = "John";
    const age = 30;
    const message = "I am " + firstName + ". " + intro + "i am " + age + " years old.";
    console.log(message);
}

// Example of string interpolation
{
    const intro = "I am a fast growing software engineer";
    const firstName = "John";
    const age = 30;
    const message = `I am ${firstName}. ${intro}, i am ${age} years old.`;
    console.log(message);
}

// Backticks allows us to write multi line strings (` `)
console.log(
    `
    i am great.
    i am strong.
    i am excellent

    `
);

// you can also you the double quote (" ")
console.log("i am great.\ni am strong.\ni am wise.")