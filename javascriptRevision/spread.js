// array
const user = ["Sax", "William", "James"]
const updatedUser = [...user, "Emma", "John"];
console.log(updatedUser);

// objects
const person = {
    name: "Andrew Santa",
    age: 44,
}

const copy = {...person, name: "Andrew Santaclause", role: "Data Engineer"};
console.log(copy)