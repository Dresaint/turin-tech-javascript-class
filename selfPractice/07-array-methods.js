//   ARRAY METHODS
// Now we're moving to Array Methods, which are very important in JavaScript and especially in React.

// An array method is a built-in function that allows us to perform operations on arrays, such as adding, removing, searching, or transforming elements.

// Let's begin with five fundamental methods.

// - push()
// adds one or more element to the end of an array
const fruits = ["Apple", "Mango"];
fruits.push("Orange");
console.log(fruits);

// - pop()
// Removes the last element from an array.
{ 
    const fruits = ["Apple", "Mango", "Orange"];
    fruits.pop();
    console.log(fruits);
}

// - unshift()
// Adds one or more elements to the beginning of an array.
{
    const fruits = ["Mango", "Orange"];
    fruits.unshift("Apple", "babana");
    console.log(fruits);
}

// - shift()
// Removes the first element from an array.
{
    const fruits = ["Apple", "Mango", "Orange"];
    fruits.shift();
    console.log(fruits);
}

// - includes()
// Checks whether an array contains a particular value. It returns a Boolean (true or false).
{
    const fruits = ["Apple", "Mango", "Orange"];
    console.log(fruits.includes("Mango")); // true
    console.log(fruits.includes("Banana")); // false
}

            // classwork

const languages = ["HTML", "CSS", "JavaScript"];
// Add "Python" to the end.
// Print the array.

languages.push("python");
console.log(languages);

const numbers = [10, 20, 30, 40, 50];
// Remove the last element.
// Print the array.
numbers.pop();
console.log(numbers);

const animals = ["Dog", "Cat", "Rabbit"];
// Add "Lion" to the beginning.
// Print the array.
animals.unshift("Lion");
console.log(animals);

const citiess = ["Lagos", "Abuja", "Enugu", "Ibadan"];
// Remove the first element.
// Print the array.
citiess.shift();
console.log(citiess)

const technologies = ["React", "Node.js", "MongoDB", "Python"];
// Check whether "Node.js" is included.
// Print the result.
console.log(technologies.includes("Node.js"));

{
    const names = ["Samuel", "Peter", "Paul"];
    // Add "Damilare" to the end and "Timi" to the beginning.
    // Print the updated array.
    names.unshift("Timi");
    names.push("Damilare");
    console.log(names)

}

{
    const scores = [45, 67, 89, 32, 100];
    // Remove the last score.
    // Add 95 to the end.
    // Print the final array.
    scores.pop();
    scores.push(95);
    console.log(scores)
}

// - indexOf()
// Finds the position (index) of an element in an array.
// If the element doesn't exist, it returns -1.

{    
    const fruits = ["Apple", "Mango", "Orange", "Banana"];
    console.log(fruits.indexOf("Orange"));
}

// - slice()
// Extracts part of an array without changing the original array.
{
    const numbers = [10, 20, 30, 40, 50];
    const result = numbers.slice(1, 4);
    console.log(result);
}

// - splice()
// Adds, removes, or replaces elements in an array. Unlike slice(), it changes the original array.

// Example — removing elements:
{
    const fruits = ["Apple", "Mango", "Orange", "Banana"];
    fruits.splice(1, 2);
    console.log(fruits);
}

// Example — adding elements:
{
    const fruits = ["Apple", "Banana"];
    fruits.splice(1, 0, "Mango", "Orange");
    console.log(fruits);
}

// - join()
// Combines all array elements into a string.
{
  const names = ["Damilare", "Samuel", "Peter"];
  console.log(names.join(", "));
}

              // classwork

{
  const countries = ["Nigeria", "Ghana", "Kenya", "Egypt"];
  // Find the index of "Kenya".
  console.log(countries.indexOf("Kenya"));
}

{
  const numbers = [10, 20, 30, 40, 50, 60];
  // Extract 20, 30 and 40 using slice().
  console.log(numbers.slice(1, 4));
}

{
  const animals = ["Dog", "Cat", "Lion", "Goat"];
  // Remove "Cat" using splice().
  animals.splice(1, 1);
  console.log(animals);
}

{
  const colors = ["Red", "Blue", "Green"];
  // Insert "Yellow" between "Blue" and "Green" using splice().
  colors.splice(2, 0, "Yellow");
  console.log(colors);
}

{
  const names = ["Damilare", "Samuel", "Peter"];
  // Join the names using " - " as the separator.
  console.log(names.join(" - "));
}

{
  const languages = ["HTML", "CSS", "JavaScript", "Python"];
  // Find the index of "PHP".
  // What does JavaScript return?
  console.log(languages.indexOf("PHP"));
}

{
  const scores = [45, 60, 75, 80, 95];
  // Remove 75 and replace it with 70 using splice().
  scores.splice(2, 1, 70);
  console.log(scores);
}

// -forEach()
// Executes a function for every element in an array.
// It performs an action for each item but does not return a new array.
{
  const numbers = [10, 20, 30];
  numbers.forEach(function(number) {
    console.log(number)
  })
}

// - map()
// Creates a new array by transforming every element.
// Original array remains unchanged
{
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(function(number) {
    return number * 2;
  });
  console.log(doubled);
}

// - filter()
// Creates a new array containing only elements that satisfy a condition.
{
  const numbers = [10, 15, 20, 25, 30];
  const result = numbers.filter(function(number) {
    return number > 20;
  })
  console.log(result);
}

          // classwork
{
  const numbers = [5, 10, 15, 20];
  // Use forEach() to print every number.
  numbers.forEach(function(number) {
    console.log(number)
  });
}

{
  const numbers2 = [2, 4, 6, 8];
  // Use map() to create a new array of numbers multiplied by 3.
  // Print the new array.
  const tripple = numbers2.map(function(number2) {
    return number2 * 3;
  });
  console.log(tripple);
}

{
  const ages = [12, 18, 25, 16, 30, 14];
  // Use filter() to get only ages 18 and above.
  // Print the result.
  const result = ages.filter(function(age) {
    return age >= 18;
  });
  console.log(result);
}

{
  const prices = [100, 200, 300, 400];
  // Use map() to increase every price by 50.
  // Print the new array.
  const increase = prices.map(function(price) {
    return price + 50;
  })
  console.log(increase);
}

{
  const scores = [45, 80, 32, 90, 65, 100];
  // Use filter() to get scores greater than or equal to 80.
  // Print the result.
  const greater = scores.filter(function(score) {
    return score >= 80;
  })
  console.log(greater);
}

{
  const names = ["Damilare", "Samuel", "Peter"];
  // Use forEach() to print each name in uppercase.
  names.forEach(function(name) {
    console.log(name.toUpperCase());
  })
}

{
  const numbers3 = [1, 2, 3, 4, 5];
  // Use map() to square each number.
  // Print the new array.
  const square = numbers3.map(function(num) {
    return num * num;
  })
  console.log(square)
}


// - find()
// Returns the first element that satisfies a condition.
{
  const numbers = [10, 25, 30, 45, 50];
  const result = numbers.find(function(number) {
  return number > 30;
  });

  console.log(result);
}

// - some()
// Checks whether at least one element satisfies a condition. Returns true or false.
{
  const numbers = [10, 20, 30, 40];
  console.log(numbers.some(function(number) {
    return number > 50;
  }));
}

// - every()
// Checks whether all elements satisfy a condition. Returns true or false.
{
  const numbers = [10, 20, 30, 40];
  console.log(numbers.every(function(number) {
    return number > 5;
  }));
}

      // classwork
{
  const ages = [12, 17, 20, 25, 30];
  // Use find() to get the first age greater than 18.
  const result = ages.find(function(age){
    return age > 18;
  });
  console.log(result);

}

{
  const scores = [30, 45, 60, 75];
// Use some() to check if at least one score is above 70.
  const check = scores.some(function(score) {
    return score > 75;
  })
  console.log(check);
}

{
  const numbers = [10, 20, 30, 40];
// Use every() to check if all numbers are greater than 5.
  const check = numbers.every(function(number) {
    return number > 5;
  })
  console.log(check);
}

{
  const products = ["Phone", "Laptop", "Tablet"];
// Use find() to get "Laptop".
  const result = products.find(function(product){
    return product === "Laptop";
  })
  console.log(result);
}

{
  const temperatures = [25, 28, 30, 32];
// Use every() to check whether all temperatures are above 20.
  const check = temperatures.every(function(temperature) {
    return temperature > 20;
  })
  console.log(check);

}