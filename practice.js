const prompt = require("prompt-sync")();

// build a simple “Welcome Program” that collects a user’s name and age, estimates the year they were born, and greets them.

const name = prompt("Enter your name: ");
const age = Number(prompt("Enter your age: "));
const currentYear = new Date().getFullYear()
const birthYear = currentYear - age;


// modify the Welcome Program so it also stores the user’s favorite hobby and includes it in the final greeting. It also asks us to decide what data type the hobby should be and explain why.

const hobby = prompt("Enter your hobby:")

const message = (`hello ${name}! you are ${age} years old, and you're born in ${birthYear} and your favourive hobby is ${hobby}.`);
console.log(message);

// Build a "Receipt Generator" that asks the user for an item name, its price, and how many they're buying, then displays a formatted receipt line.

const itemName = prompt("Enter item name:");
const prize = Number(prompt("Amount:"));
const quantity = Number(prompt("Qty:"));
const total = prize * quantity;
const reciept = `
    ======Reciept========
    itemName: ${itemName}
    prize: #${prize}
    quantity: ${quantity}
    "Total: #${total}`

console.log(reciept);

// Build a "Username Generator" that asks for a person's first name and
// favorite number, converts the number properly, and creates a username by
// combining the lowercase first name with the number. trim() the name in case someone types
// extra spaces.
// If the length of firstName is greater than 8, replace firstName with its first 8 characters.

{
    firstName = prompt("Enter your firstname:").trim();
    if (firstName.length > 8) {
        firstName = firstName.slice(0, 8)
    };
    favouriteNumber = Number(prompt("Enter your favourite number:"));
    lower = firstName.toLowerCase();
    userName = lower + favouriteNumber;
    console.log(`your username is ${userName}`); 
}

// Build a "Grade Rounder and Reporter" that asks for a student's exact
// numeric score, rounds it, and builds a message reporting the rounded score along
// with the student's name in all uppercase.

{
    const name = prompt("Enter your Name:").toUpperCase();
    const score = Number(prompt("Enter your score:"));
    finalScore = Math.round(score);
    console.log(`NAME: ${name}, SCORE: ${finalScore}`)

}

// Build a "Movie Ticket Pricer" that asks for a person's age and whether it's a
// weekday or weekend, then decides the ticket price using conditional logic (e.g.,
// discounts for children, seniors, or weekday showings).

// {
//     const age = Number(prompt("Enter your age:"));
//     const day = prompt("weekday or weekend:").toLowerCase();
//     let ticketPrice;
//     if (age < 18 && day === "weekday") {
//         ticketPrice = 5000;
//     } else if (age < 18 && day === "weekend") {
//         ticketPrice = 7000;
//     } else if (age > 18 && day === "weekday") {
//         ticketPrice = 12000;
//     } else if (age > 18 && day === "weekend") {
//         ticketPrice = 17000;
//     } else {
//         "Invalid input";
//     }

//     const message = (`Your movie ticket is #${ticketPrice}`);
//     console.log (message)



// Movie Ticket Pricer
{
    const age = Number(prompt("Enter your age: "));
    const day = prompt("Enter weekday or weekend: ").toLowerCase();

    let ticketPrice;

    // Check for invalid input
    if (isNaN(age) || age < 0 || (day !== "weekday" && day !== "weekend")) {
        console.log("Invalid input");
    }

    // Children: under 18
    else if (age < 18) {

        if (day === "weekday") {
            ticketPrice = 5000;
        } else {
            ticketPrice = 7000;
        }

    }

    // Seniors: 60 and above
    else if (age >= 60) {

        if (day === "weekday") {
            ticketPrice = 6000;
        } else {
            ticketPrice = 8000;
        }

    }

    // Adults: 18 - 59
    else {

        if (day === "weekday") {
            ticketPrice = 12000;
        } else {
            ticketPrice = 17000;
        }

    }

    // Display ticket price if input was valid
    if (ticketPrice !== undefined) {
        console.log(`Your movie ticket is ₦${ticketPrice}`);
    }
}

// build a "Tip Calculator Toolkit" made of two functions: one that calculates a
// tip based on a bill amount and tip percentage, and another that displays a
// formatted final message.
// Step 1 — Understand the Problem: Explain what each function should do, separately.
// Step 2 — Identify Inputs: What parameters does each function need?
// Step 3 — Identify Processing: What calculation happens inside the tip function?

// Step 4 — Identify Outputs: What should each function produce or display?
// Step 5 — Plan the Solution: Decide as a group how many functions you'll use and
// what each one is responsible for, before writing code.
// Step 6 — Write the Code: Declare your functions with parameters, then call them with
// test values.
// Step 7 — Test the Program
// Part 5: Extension Challenge
// Add a third function that calculates the total bill split evenly between a given number
// of people

  


