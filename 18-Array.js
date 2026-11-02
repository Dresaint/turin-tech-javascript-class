/* 
    An Array is a data structure that stores multiple values in a single variable.. this values can be similar data types or different data types.
    
    Array are usefil whenever you're working with a collection of related items.

    Arrays are ordered, meaning each item has a specific position (index) starting from zero 0

*/

// METHODS OF CREATING AN ARRAY

// 1. Using array literal
const fruits = ["banana", "mango", "orange"];
const numbers = [1, 2, 3, 4, 5];

// 2. Using the array constructor
const users = new Array("John", "Doe", "Max", 5, {name: "John"})

// console.log(fruits);
// console.log(numbers);
// console.log(users);

console.table(fruits);
console.table(numbers);
console.table(users);

// Empty Array
const names = [];

// Accessing elemets in an Array
console.log(fruits[2]);
console.log(users[4]);

// modifying elements of an array
fruits[1] = "grape";
console.log(fruits);

// length property of an array
const color = ["red", "green", "white", "black", "blue",];
console.table(color)
console.log(color.length);
console.log(color[3]);

// finding the indexOf an item in an Array
console.log(color.indexOf("red",))

// accessing last element of an Array
console.log(color[color.length - 1]);

// Nested Arrayays
const letters = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h",["i", "j", "k"]]
];
console.log(letters[0][1]);
console.log(letters[2][2][1]);

// class Activity
// print random colors from the array below

{
    const colors = [
        "ash",
        "cream",
        "grey",
        "black",
        "white",
        "purple",
        "green",
        "blue",
    ];
    function getAnyRandomColor (colorsArray) {
        const randomColorIndex = Math.floor(Math.random() * colorsArray.length);
        return colorsArray[randomColorIndex];
    }
    console.log(getAnyRandomColor(colors))
    
    // const random = colors[Math.floor(Math.random() * colors.length)];
    // console.log(random);
}

// ARRAY AND LOOPS
// using for loop:

{ 
    const fruits = ["Apple", "Banana", "Mango"];
    for(let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);

    }
} 

// using the for of loop

    for (const hobby of fruits) {
        console.log(hobby);
    }

// METHODS OF ARRAY


const workers = ["John", "sax", "emma", "andy",]

// 1. push methods
// used to add more items to the end of an array

workers.push("maxwell","damiii");
console.log(workers);

// 2. pop method
// used to remove item from the end an array

workers.pop();
workers.pop();
workers.pop();
console.log(workers);

// 3. unshift method
// used to add more items to the beginning of an array

workers.unshift("kemi", "kenny")
console.log(workers);

// 4. shift method
// used to remove item from the beginning an array

workers.shift();
workers.shift();
workers.shift();
console.log(workers)

// 5. concat method
// used to merge one or more arrays together

const roles = ["devops", "frontend", "backend"]

const workersAndRoles = workers.concat(roles, [1,2,3,4], "str");
console.log(workersAndRoles)

// 6. join Method
// it joins the element of an array into a string
console.log(roles.join(", `"))

// 7. slice method
const cars = ["toyota", "benz", "lexus", "ford", "honda", "pejeout"];
carsLeft = cars.slice(0, 1);
console.log(carsLeft);


logcarLot= cars.slice(2, 5);
console.log(logcarLot);

// 8. splice method
// used to remove, replace, and/or insert an element/elements into an array.

// when it takes 1 argument

{
    const remainingCars = cars.splice(3);
    console.log(remainingCars);
    console.log(cars);
}

// when it takes 2 arguments
// the first argument is the start index and the second argument becomes the delete count
const reviwedCars = cars.splice(1, 3);
console.log(reviwedCars);
console.log(cars);

// whenn it takes 3 or more arguments
// it removes the first two parameter and replace it with the others
{
    const stringArray = ["a", "b", "c", "d", "e", "f"];

    const deletedStrings = stringArray.splice(2, 2, "g");
    console.log(deletedStrings);
    console.log(stringArray)
}
