// Tenary operators

const { use } = require("react");

// Example 1
const yearsOfExperience = 2;
const salary = yearsOfExperience > 2 ? "NGN800,000" : "NGN400,000";
console.log(salary); 

// example 2
const trafficColor = "blue";
const printTrafficAction = 
    trafficColor === "green" ? "Go" :
    trafficColor === "yellow" ? "Get Ready" : 
    trafficColor === "Red" ? "Stop" : "Not a valid traffic color";
console.log(printTrafficAction);

// class work

let num1 = 11;
let num2 = 19;
let sum = (num1 * num2);
const EvenOdd = 
    sum % 2 === 0 ? "even" : "odd";
console.log(num1);
console.log(num2);
console.log(sum);
console.log(EvenOdd);

