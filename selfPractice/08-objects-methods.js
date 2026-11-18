// OBJECT METHODS
// object stores data in key-value pairs.

// properties using built-in JavaScript object methods.

// Lesson 1: Object.keys()
// What does it do?

//A. Object.keys() returns all the keys (property names) of an object in an array

const student = {
  name: "Damilare",
  age: 30,
  course: "JavaScript",
  isDeveloper: true
};
const result = Object.keys(student);
console.log(result);

//B. Counting object properties
// You can combine Object.keys() with the array's length property.

{
    const car = {
        brand: "Toyota",
        model: "Camry",
        year: 2005,
        color: "Black"
    };
    const result = Object.keys(car).length;
    console.log(result);
}

// C. Checking whether an object has properties

{
    const user = {
        name: "Damilare",
        email: "damilare@gmail.com",
        age: 30

    };
    const properties = Object.keys(user);
    console.log(properties.includes("email"));

}

        // CLASSWORK
{
    const laptop = {
        brand : "Apple",
        model : "Macbook Pro",
        RAM : "16GB",
        storage :  "512GB"
    }
    // Use Object.keys() to get all the keys.
    const result = Object.keys(laptop);
    console.log(result);
}

{
    const employee = {
        name: "John",
        age: 28,
        department: "IT",
        salary: 150000
    };
    // Use Object.keys() to count the properties.
    const result = Object.keys(employee).length;
    console.log(result);
}

{
    const user = {
        username: "saint",
        email: "saint@gmail.com",
        password: "12345"
    };
    // Use Object.keys() and includes()
    // to check whether "email" exists.
    const result = Object.keys(user).includes("email");
    console.log(result);
}

{
    const phone = {
        brand: "Samsung",
        model: "Galaxy S25",
        color: "Black"
    };
    // Store the keys in a variable called result.
    // Print result.
    const result = Object.keys(phone);
    console.log(result);
}

{
    const product = {
        name: "Laptop",
        price: 850000,
        quantity: 5,
        available: true
    };

    // Use Object.keys() to get the keys.
    // Then use .length to find how many properties exist.
    const result = Object.keys(product)
    console.log(result.length);
}

// Lesson 2: Object.values()
// What does it do?
// Object.values() returns all the values of an object in an array.
{
    const student = {
        name: "Damilare",
        age: 30,
        course: "JavaScript"
    };
    console.log(Object.values(student));
}

// B. Calculating values
{
    const scores = {
        mathematics: 85,
        English: 90,
        biology: 75,
        chemistry: 80
    };
    const total = Object.values(scores).reduce(function(sum, score) {
        return sum + score;
    }, 0);
    console.log(total);
}

        // CLASSWORK
{
    const person = {
        name: "Damilare",
        age: 30,
        country: "Nigeria"
    };
// Use Object.values() to get all the values.
const result = Object.values(person);
console.log(result);
}

{
    const scores = {
        math: 80,
        English: 75,
        biology: 90,
        physics: 85
    };
// Use Object.values() to get all scores.
// Then calculate their total using reduce().
    const result = Object.values(scores).reduce(function(sum, score) {
        return sum + score;
    }, 0);
    console.log(result);
}

{
    const car = {
        brand: "Toyota",
        model: "Camry",
        year: 2005
    };
// Use Object.values() to check whether
// "Camry" exists in the values.
    const result = Object.values(car).includes("Camry");
    console.log(result);
}

{
    const product = {
        name: "Phone",
        price: 250000,
        quantity: 10
    };
// Use Object.values() to count the values.
    const result = Object.values(product).length
    console.log(result);
}

{
    const user = {
        username: "saint",
        email: "saint@gmail.com",
        role: "developer",
        active: true
    };
// Use Object.values() to get all values.
// Then use includes() to check if "developer" exists.
    const result = Object.values(user);
    console.log(result.includes("developer"));
}

// Lesson 3: Object.entries()
// This method is particularly useful when working with objects and loops.

// What does it do?
// Object.entries() returns an array containing the object's key-value pairs.

{
    const student = {
        name: "Damilare",
        age: 30,
        course: "JavaScript"
    };
    const result = Object.entries(student);
    console.log(result);

    // accessing individual entries
    console.log(result[0]);
    console.log(result[1]);

    // accessing the key and value seperately
    console.log(result[0][0]);
    console.log(result[0][1]);

    console.log(Object.keys(student));
    console.log(Object.values(student));
    console.log(Object.entries(student));
}

        // classwork

{
    const person = {
        name: "John",
        age: 25,
        country: "Nigeria"
    };
// Use Object.entries() to get all key-value pairs.
    const result = Object.entries(person);
    console.log(result);
}

{
    const car = {
        brand: "Toyota",
        model: "Camry",
        year: 2020
    };
// Store Object.entries() in a variable called result.
// Print result[0].
    const result = Object.entries(car);
    console.log(result[0]);
}

{
    const student = {
        name: "Mary",
        course: "JavaScript",
        score: 90
    };
// Use Object.entries() to get all entries.
// Print the key of the second entry.
    const result = Object.entries(student);
    console.log(result[1][0]);
}

{
    const product = {
        name: "Laptop",
        price: 800000,
        quantity: 4
    };
// Use Object.entries() to count the total entries.
    const result = Object.entries(product).length;
    console.log(result);
}

{
    const user = {
        username: "saint",
        role: "developer",
        active: true
    };
// Use Object.entries() to check whether
// ["role", "developer"] exists in the entries.
    const result = Object.entries(user);
    console.log(result.some(function(entry) {
    return entry[0] === "role" && entry[1] === "developer";
    }))
}

// LESSON 4: Object.assign()
// This method allows us to copy properties from one or more objects into another object.

// Example:
{
        const person = {
        name: "Damilare",
        age: 30
    };

    const extraInfo = {
        country: "Nigeria",
        course: "JavaScript"
    };

    const result = Object.assign(person, extraInfo);

    console.log(result);
}