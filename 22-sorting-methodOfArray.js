// SORTING METHOD IN ARRAYS

// 1. reverse() method
// it is used to reverse the order of the elements in an array. It mutates the original array.

// syntax: array.reverse()

const letters = ["a", "b", "c", "d", "e"];
// let's use the spread operator so it does'nt mutate the original array
const reversedLetters = [...letters].reverse();
console.log(reversedLetters); // Output: ["e", "d", "c", "b", "a"]
console.log(letters); // Output: ["a", "b", "c", "d", "e"] (original array is not mutated)

// 2. toReversed() method
// it is used to create a new array with the elements in reverse order. It does not mutate the original array.

// syntax: array.toReversed()

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array is not mutated)

// 3. sort() method
// it is used to sort the elements of an array in place and returns the sorted array. It mutates the original array.

// syntax: array.sort([compareFunction])
/*
    - without a parameter, the sort() method sorts the elements as strings in ascending order.
    - with a compare function, you can define the sort order.
*/

// without a parameter
// 1.
const items = ["spoon", "umbrella", "knife", "plate", "fork"];
const sorttedItems = items.sort();
console.log(sorttedItems);

// 2.
// the sort() method is not efficient for sorting numbers
const prices = [1, 11, 10, 4, 19, 22, 2];
const sorttedPrices = prices.sort();
console.log(sorttedPrices)

// sorting with the compare function
// 1. Ascending
const choosenNumbers = [1, 11, 10, 4, 19, 22, 2];
sortedChoosenNumbers = choosenNumbers.sort((a, b) => a - b); // explained: if a - b is negative, a comes first; if positive, b comes first; if zero, they are equal.
console.log(sortedChoosenNumbers); // Output: [1, 2, 4, 10, 11, 19, 22]

// 2. decending
const choosenNumbers2 = [1, 11, 10, 4, 19, 22, 2];
sortedChoosenNumbers2 = choosenNumbers2.sort((a, b) => b - a); // explained: if b - a is negative, b comes first; if positive, a comes first; if zero, they are equal.
console.log(sortedChoosenNumbers2); // Output: [22, 19, 11, 10, 4, 2, 1]

// the localeCompare() method is used to compare two strings in the current locale. It returns a number indicating whether the reference string comes before, after, or is the same as the given string in sort order.
// 1. Ascending
const names = ["John", "Amanda", "Zoe", "Michael", "Sarah"];
const sortedNames = names.sort((a, b) => a.localeCompare(b));
console.log(sortedNames); // Output: ["Amanda", "John", "Michael", "Sarah", "Zoe"]

// 2. decending
const names2 = ["John", "Amanda", "Zoe", "Michael", "Sarah"];
const sortedNames2 = names2.sort((a, b) => b.localeCompare(a));
console.log(sortedNames2); // Output: ["Zoe", "Sarah", "Michael", "John", "Amanda"]

// sorting array of objects
// sorting by name
// accending
const products = [
    { name: "Laptop", price: 45000 },
    { name: "Phone", price: 25000 },
    { name: "Tablet", price: 11750 },
    { name: "Monitor", price: 55300 }
];
const productByName = products.sort((a, b) => (a.name).localeCompare(b.name));
console.log(productByName); // Output: sorted by name in ascending order

// decending
const productByName2 = products.sort((a, b) => (b.name).localeCompare(a.name));
console.log(productByName2);

// sorting by price
// ascending
const productByNames = products.sort((a, b) => a.price - b.price);
console.log(productByNames); // Output: sorted by price in ascending order

// decending
const productByNames2 = products.sort((a, b) => b.price - a.price);
console.log(productByNames2); // Output: sorted by price in decending order

/* 
=========== CLASS ACTIVITY ===============

const students = [
  { name: "Sarah", score: 75, age: 21 },
  { name: "Michael", score: 90, age: 22 },
  { name: "John", score: 75, age: 20 },
  { name: "Grace", score: 90, age: 20 },
  { name: "Daniel", score: 85, age: 21 },
  { name: "Esther", score: 75, age: 22 }
];

Sort the array:
(a) by name
(b) by score

*/

{
    const students = [
        { name: "Sarah", score: 75, age: 21 },
        { name: "Michael", score: 90, age: 22 },
        { name: "John", score: 75, age: 20 },
        { name: "Grace", score: 90, age: 20 },
        { name: "Daniel", score: 85, age: 21 },
        { name: "Esther", score: 75, age: 22 }
    ];

    // sorted by name
    const sortedByName = students.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Sorted by name:", sortedByName);

    // sorted by score
    const sortedByScore = students.sort((a, b) => a.score - b.score);
    console.log("Sorted by score:", sortedByScore);

    // sorting by score first, then name
    const sortedScoreName = students.sort((a, b) => {
        if (a.score !== b.score) {
            return b.score - a.score;
        }
        return (a.name).localeCompare(b.name);
    });
    console.log(sortedScoreName);
}

