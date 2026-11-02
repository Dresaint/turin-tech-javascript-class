// syntax
/*
function  functioName() {
    code to be executed
}
functionName();
*/

// Defining a function

function sayHello() {
    console.log("say hello");
}
sayHello();

/* 
// function can be define either by:
    - Function declarations
    - Anonymous
    - Arrow function
*/
function evenNumbers() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

}
evenNumbers();

// fuction with return keyword

// 1.
function returnString() {
    return "my string";
}
const fnResult = returnString();
console.log(fnResult);

// 2.
function addTwoNumbers() {
    const num1 = 10;
    const num2 = 15;
    return num1 + num2;
}

function displayResult() {
    const result = addTwoNumbers;
    console.log(result);
}
displayResult();

// 3.
function doExponent() {
    const base = 9;
    const power = 2;
    return Math.pow(base, power);
}

const displayDoExponent = `The result of the exponent is ${doExponent()}`;
console.log(displayDoExponent);

/*
FUNCTIONS WITH PARAMETERS

syntax

function functionName(parameter1, parameter2, parameter3) {
    use parameter in the function body
}
calling the function with the arguments
functionName(value1, value2, value3);

*/

// example 1
{
    function sumTwoNumbers(num1, num2) {
        return num1 + num2;
    }
    console.log(sumTwoNumbers(10, 20));
    console.log(sumTwoNumbers(5, 10));

}

// example 2 
function calculateAreaOfRectangle(length, breath) {
    return length * breath
}
const areaOfRectangle = calculateAreaOfRectangle(10, 7);
console.log(areaOfRectangle);

function calculateTotal(item1, item2, item3)  {
    return item1 + item2 + item3;
}
    total = calculateTotal(5000, 8000, 3000);
    console.log("#" + total);
    totals = total >= 10000 ? "Eligible for free delivery" : "Delivery fee applies";
    console.log(totals);


function calculateKelvin(temInCelsius) {
    return 273 + temInCelsius;

}
const tempInKelvin = calculateKelvin(23);
console.log(`${tempInKelvin}k`)


console.log("annonymousFunction")

// ANONYMOUS FUNCTION EXPRESSION


 const calculateKelvinTemp = function(temInCelsius) {
    return 273 + temInCelsius;

}
const tempResult = calculateKelvinTemp(35);
console.log(tempResult);

const subtractTwoNumbers = function(x, y) {
    console.log(x - y);
}
subtractTwoNumbers(78,45);

const calculateBMI = function(weight,height) {
    return weight/(height ** 2)
}
   
bmi = calculateBMI(100, 5);
console.log(bmi);

/*
ARROW FUNCTION 

Syntax
const addTwoNumber = () => {

}

const addTwoNumbersWithParams = (num1, num2) => {
    
}

*/ 

// implicit arrow function

// {
//     const addTwoNumbers = (num1, num2) => num1 + num2;
//     console.log(addTwoNumbers(10, 9));

//     const sayHello = (name) =>
// }
    


const getStringLength = (string) => string.length;
console.log(getStringLength("football"));

// Explicit arrow function
// const fizzbuzz = (number) => {
//     if (number % 3 === 0) && (number % 5 ===0) {
//         return ""
//     }
// }

/* 
============ Class Activity ============
Create a function called rectanglePerimeter that takes length and width as parameters and prints the perimeter. Formula: Perimeter = 2 × (length + width)

*/
// explicit
const rectanglePerimeter = (length, width) => {

    return 2 * (length + width);
    
}
console.log(rectanglePerimeter(5, 5));

// implicit
const perimeterRectangle = (l, w) => 10 * (l + w);
console.log (perimeterRectangle(10, 10))