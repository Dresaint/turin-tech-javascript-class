        // ARRAY DESTRUCTURING

// Basis Syntax
// const array = [item1, item2, item3, item4];
// const [variable1, variable2, ...] = array;

//1. Basic array destructuring
const colors = ["red", "green", "blue"];
const [color1, color2, color3] = colors;

console.log(color1);
console.log(color3);
console.log(color1);

// 2. Skipping elements
const numbers = [1, 2, 3, 4, 5];

// skip elements using commas
const [first, third, fifth] = numbers;
console.log(first);
console.log(third);
console.log(fifth);

// 3. Default Values
const [a, b, c = 3] = [1, 2];
console.log(a);
console.log(b);
console.log(c);

const [x, y, z = 'default'] = ['hello', 'world'];
console.log(x);
console.log(y);
console.log(z);

// 4. Destructuring from Function Return
function getCoordinates() {
    return [40.7128, -74.0060];
}
const [latitude, longitude] = getCoordinates();

console.log(latitude);
console.log(longitude);


            // OBJECT DESTRUCTURING
// Basic Syntax
// const { property1, property2, ...} = object;

//1. Basic Object Destructuring

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

// 2. Renaming Variable

const user = {
    id: 101,
    username: 'john_doe',
    email: "john@example.com"
};
// renaming during destructuring
const { username: displayName, email: userEmail} = user;

console.log(displayName);
console.log(userEmail)

// 3. Default Values

const settings = {
    theme: "dark",
    fontSize: 16
}

const { theme, fontSize, language = 'en'} = settings;

console.log(theme);
console.log(fontSize);
console.log(language);

// 4. Nested Destructuring

{
    const employee = {
        name: 'Sarah',
        positon: 'Developer',
        address: {
            street: '123 Main St',
            city: 'Boston',
            country: 'USA'
        }
    };

    // Destructure nested object
    const {
        name,
        address: { city, country }
    } = employee;

    console.log(name);
    console.log(city);
    console.log(country);
}

// Destructuring a Function Parameters
{
    function displayUser({ name, age, email }) {
        console.log(name);
        console.log(age);
        console.log(email);
    }

    const user = {
        name: 'Bob',
        age: 34,
        email: "bob@example.com"
    };

    displayUser(user);
}