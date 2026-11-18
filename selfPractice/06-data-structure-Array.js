//1.  ARRAYS?
// An array is a special variable that stores multiple values in a single variable.

// a.
const countries = ["NIGERIA", "ENGLAND", "BRAZIL", "CONGO", "GHANA"];
// b.
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
console.log(colors[0]);
console.log(colors[2]);
console.log(colors[4]);

// c.
const scores = [45, 67, 89, 32, 100, 76];
console.log(scores.length);
console.log(scores[scores.length - 1]);

// d.
const cars = ["Toyota", "Honda", "Mercedes", "BMW"];
cars[1] = "lexus";
console.log(cars)

// e.
const names = ["Dare", "Samuel", "Peter", "Paul", "Timi",];
const firstName = names[0];
const lastname = names[4];
names[2] = "Damilare";
const totalNumOfNames = names.length;
console.log(firstName);
console.log(lastname)
console.log(names);
console.log(totalNumOfNames)

//2. OBJECTS?
// An object is a collection of properties. Each property consists of a key and a value.

/*
    Accessing object properties
There are two ways.

Dot notation
console.log(person.firstName);
console.log(person.age);

Bracket notation
console.log(person["lastName"]);
console.log(person["isDeveloper"]);

*/

const student = {
  name: "Damilare",
  age: 30,
  course: "JavaScript",
  score: 85,
  isEnrolled: true
};

console.log(student.name);
console.log(student["course"]);
console.log(student.score);
student.score = 95;
student.school = "ETTP";
student.isEnrolled = false;
console.log(student)

// 3. OPTIONAL CHAINING (?.)
// Optional chaining allows us to safely access a property inside an object without getting an error when the value before it is undefined or null.

const person = {
  name: "Damilare",
  contact: {
    email: "damilare@example.com"
  }
};
console.log(person.contact?.email);

{
    const student = {
      name: "Samuel"
    };
    console.log(student.school?.name);
}

const employee = {
  name: "Peter",
  job: {
    title: "Software Developer",
    company: "Tech Solutions"
  }
};
console.log(employee.job?.company);

const customer = {
  name: "Timi",
  address: null
};
console.log(customer.address?.city);

const product = {
  name: "Laptop",
  specifications: {
    brand: "HP",
    ram: "16GB"
  }
};
console.log(product.specifications?.ram);

// 4. NULLISH COALESCING (??)
// Nullish coalescing allows us to provide a default value when something is null or undefined.

// a.
const nickname = null;
console.log(nickname ?? "No nickname");

// b.
const age = 0;
console.log(age ?? 18);

// c.
const country = undefined;
console.log(country ?? "Nigeria");

// d.
const isLoggedIn = false;
console.log(isLoggedIn ?? true);

// e.
{const firstName = "";
console.log(firstName ?? "Anonymous");
}
// f.
const price = null;
const finalPrice = price ?? 5000;
console.log(finalPrice);

// g.
const score = 75;
console.log(score ?? 0);



