// 1. .length
// This tells you how many characters are in a string.

/* 2. .toUpperCase()
This converts a string to uppercase. */

/* .toLowerCase()
This converts a string to lowercase.*/

/* 4. .includes()
This checks whether a string contains another string.
It returns a Boolean: */

const message = "I love JavaScript";
console.log(message.includes("JavaScript"));   // Output: true

/* 5. .startsWith()
This checks whether a string starts with another string.
It returns a Boolean: */

const message2 = "I love JavaScript";
console.log(message2.startsWith("I"));   // Output: true        

/* 6. .endsWith()
This checks whether a string ends with another string.
It returns a Boolean: */

const message3 = "I love JavaScript";
console.log(message3.endsWith("JavaScript"));   // Output: true

/* 7. .indexOf()
This returns the index of the first occurrence of a specified value in a string.
It returns -1 if the value is not found. */

const message4 = "I love JavaScript";
console.log(message4.indexOf("l"));   // Output: 2

/* 8. .charAt()
This returns the character at a specified index in a string. */

const message5 = "I love JavaScript";
console.log(message5.charAt(2));   // Output: l

/* 9. Bracket Notation
You can also access characters in a string using bracket notation. */

const message6 = "I love JavaScript";
console.log(message6[2]);   // Output: l

/* 10. .slice()
This extracts a section of a string and returns it as a new string. */

const message7 = "I love JavaScript";
console.log(message7.slice(2, 6));   // Output: love

/* 11. .trim()
This removes whitespace from both ends of a string. */

const message8 = "   I love JavaScript   ";
console.log(message8.trim());   // Output: I love JavaScript

/* 12. .replace()
This replaces a specified value with another value in a string. */

const message9 = "I love JavaScript";
console.log(message9.replace("JavaScript", "Python"));   // Output: I love Python

/* 13. .repeat()
This repeats a string a specified number of times. */

const message10 = "I love JavaScript";
console.log(message10.repeat(3));   // Output: I love JavaScriptI love JavaScriptI love JavaScript  

/* 14. .split()
This splits a string into an array of substrings based on a specified separator. */

const message11 = "I love JavaScript";
console.log(message11.split(" "));   // Output: ["I", "love", "JavaScript"]

/* 15. .concat()
This concatenates (joins) two or more strings together. */

const message12 = "I love ";
const message13 = "JavaScript";
console.log(message12.concat(message13));   // Output: I love JavaScript

/* 16. .padStart()
This pads the current string with another string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start of the current string. */

const message14 = "5";
console.log(message14.padStart(3, "0"));   // Output: 005

/* 17. .padEnd()
This pads the current string with another string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string. */

const message15 = "5";
console.log(message15.padEnd(3, "0"));   // Output: 500

/* 18. .match()
This retrieves the matches when matching a string against a regular expression. */

const message16 = "I love JavaScript";
console.log(message16.match(/love/));   // Output: ["love", index: 2, input: "I love JavaScript", groups: undefined]

/* 19. .search()
This searches a string for a specified value and returns the position of the match. */

const message17 = "I love JavaScript";
console.log(message17.search("love"));   // Output: 2

/* 20. .replaceAll()
This replaces all occurrences of a specified value with another value in a string. */

const message18 = "I love JavaScript. JavaScript is great!";
console.log(message18.replaceAll("JavaScript", "Python"));   // Output: I love Python. Python is great!     

