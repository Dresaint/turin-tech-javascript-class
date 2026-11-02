// Creating an object using object literal

const worker = {
    name: "Maxwell Williams",
    age: 25
}

// Using the Object constructor
const student = new Object();
student.name = "John Doe";
student.course = "Computer engineering"
console.log(student);

// Definning an empty object
const person = {};
console.log(person);


/*
 Guidelines for definning object properties
1, The property names are case sensitive
2. it allows the same naming convention as Javascript variables.
3. Each property name must be unique.
4. When you are not following the typical javascript naming convention, the name must be enclosed in a quotation mark.
*/

// Example
{
    const person = {
        name: "John Doe",
        age: 20,
        role: "Backend Engineer",
        stateOfOrigin: "Enugu",
        "Place of birth": "Lagos"
    }


/*
 Accessing the properties of an object
 There are two ways to access the properties of an object;
 1. The dot notation
 2. The square bracket notation
*/
// example
console.log(person.stateOfOrigin);
console.log(person["Place of birth"])

}

{
    // Modifying objects
    const person = {
        name: "John Doe",
        age: 20,
        role: "Backend Engineer",
        stateOfOrigin: "Enugu",
        "Place of birth": "Lagos"
    }

    person.role = "Frontend Engineer";
    person["Place of birth"] = "London";
    console.log(person)

    // adding a new property to an object
    person.location = "Oshodi, Lagos";
    console.log(person);    

    // deleting a property
    delete person["Place of birth"];
    delete person.stateOfOrigin;
    console.log(person)
}

/* 
 NESTED OBJECT
 A nested object is an object that contains another object as one of its properties
*/

const user = {
    name: "John Doe",
    age: 20,
    role: "Backend Engineer",
    stateOfOrigin: "Enugu",
    "place of birth": {
        city: "lekki Phase 1",
        "state": "Enugu"

    },
    address: {
        streetNumber: 17,
        streetName: "Isaac John",
        lga: "Alomosho",
        city: "Ikeja",
        state: "Lagos",
        country: "Nigeria"
    },
    hobbies: ["reading", "dancing", "football", "travelling"]
}
console.log(user.address.country);
console.log(user["place of birth"].city);
console.log(user["place of birth"]["state"]);
console.log(user.hobbies[2])

// ========classwork======
// create an object representing a book (title, author, pages, isRead)

{
    const book = {
        title: "1000 ways to die",
        author: "Damilare Daniels",
        pages: 85,
        isRead: "Yes"
    }
    console.log(book.author)
}

// OBJECTS WITH METHOD
// A method is a fuction inside an object

// example 1
const counter = {
    countValue: 5,
    increaseCount: function() {
        return this.countValue += 1;
    },
    getCountValue() {
        return this.countValue;
    }
}
console.log(counter.countValue);
counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
const currentCountState = counter.getCountValue();
console.log(currentCountState)

// example 2 using banking
const bankAccount = {
    accountBalance: 5000,
    makeDeposit: function(amount) {
        this.accountBalance += amount;
    },
    withdrawal(amount) {
        if (amount > this.accountBalance) {
            console.log("insufficient funds");
            return; //this is to stop the execution when this condition is met
        }

         this.accountBalance -= amount;
    },
    getAccountBalance() {
        return this.accountBalance;
    }
}

bankAccount.makeDeposit(55000);
bankAccount.makeDeposit(30000);
console.log(bankAccount.getAccountBalance());
bankAccount.withdrawal(45000);
console.log(bankAccount.getAccountBalance());
bankAccount.withdrawal(100000)

// class assessment
/*
Create a JavaScript object called shoppingCart that represents a customer's shopping cart.

The object should have a cartItems property, which is an array containing the items in the cart. Each item should be represented as an object with a name, price, and quantity.

Your shoppingCart object should have the following methods:

1.⁠ ⁠addItem(name, price, quantity)
Adds a new item to the cart.
Example: shoppingCart.addItem("Keyboard",let 25000, 2);

2.⁠ ⁠calculateTotal()
Calculates and returns the total cost of all items in the cart.

3.⁠ ⁠displayCart()
Displays each item in the cart along with its name, price, and quantity.

4.⁠ ⁠checkout()
Checks if the cart is empty.
If the cart is empty, display "Your cart is empty".
Otherwise, display the total amount to be paid and clear the cart.

5.⁠ ⁠getCartItems()
Returns the current items in the cart.

6.⁠ ⁠clearCart()
Removes all items from the cart.
It sets cartItems back to an empty array.
*/

const shoppingCart = {
    cartItems: [],
    addItems(name, price, quantity) {
        return this.cartItems.push(name, price, quantity)
    },
    calculateTotal() {

    }
}

/* 

const customers = ["Chioma", "David", "Amina", "Tunde"];

Task: Return the first 3 letters of each customer name as a new array

*/
{
const customers = ["Chioma", "David", "Amina", "Tunde"];
const modify = customers.map(cus => {
    return cus.slice(0,3);
});
console.log(modify);
}



/* 
You are given student data:

const students = [
  { name: "John", score: 45 },
  { name: "Mary", score: 80 },
  { name: "Ali", score: 67 },
  { name: "Grace", score: 92 }
];

Task:

Using map():

Return a new array of objects

Add a new property called status

"Pass" if score is 50 or above

"Fail" if below 50

Expected Output:

[
  { name: "John", score: 45, status: "Fail" },
]


*/




/* 
============= Task =====================

You are given user data from a backend:

const users = [
  { id: 1, firstName: "Jane", lastName: "Doe", isActive: true },
  { id: 2, firstName: "Mark", lastName: "Smith", isActive: false },
  { id: 3, firstName: "Sarah", lastName: "Johnson", isActive: true }
];
Task:

Using map():

Return a new array

Combine firstName and lastName into fullName

Replace isActive with:

"Active User" if true

"Inactive User" if false

Remove the original firstName and lastName properties

Expected structure:

[
  { id: 1, fullName: "Jane Doe", status: "Active User" },
]

*/
