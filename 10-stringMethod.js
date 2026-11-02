// slice()  it works on arrays and strings
const word = "welcome"
console.log(word.slice(1, 4));

const sentence = "i am learning javascript";
console.log(sentence.slice(0, 13));

// charAt()  it works on string alone

let myName = "daniel";
console.log(myName.charAt(4));
const firstletter = myName.slice(0).toUpperCase;
const restOfName = myName.slice(1);
console.log(firstletter + restOfName);

// length() 
// it returns the total number of characters we have in a string
const user = "maxwell"
console.log(user.length);

const message = "Welcome to the world of tech"
console.log(message.length);

// indexOf()
const text = "Everyone is great at something. this statement is so true"
console.log(text.indexOf("is"));

// lastIndexOf()
console.log(text.lastIndexOf("is"));

// includes()

console.log(text.includes("is"));  

// replace()
const welcomeText = "welcome JS to learning JS"
console.log(welcomeText.replace("JS", "JavaScript"))

// replaceAll()
console.log(welcomeText.replaceAll("JS", "JavaScript"))

// trim()  it remove white spaces from start and end
const eat = "  i ate jollof rice  ";
console.log(eat.trim());

// split() method   it turns a string into an array of substrings

const myText = "I am John Doe. I am learning to be a great guy";
console.log(myText.split(" "));

// repeat() method  it repeats a string certain number of times
const repeats = "Hello";
console.log(repeats.repeat(2));

// concat method.  it allows to combine strings together
const firstName = "John";
const lastname = "Doe";
console.log(firstName.concat(" ", lastname, " ", "a great guy"));



