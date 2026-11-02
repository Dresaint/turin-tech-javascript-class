const strings = ["a", "b", "c", "d", "e", "f"]
// Higher Order Functions are functions that take a function as an argument, or return a function.


/* 
 1. ====forEach() Method =======

it is used to loop (iterate) through the element of an array and execute a specified function (callback function) on each element.
- it does'nt mutate the original array
- it doesn't return a new array
- it can only be used on an array 

syntax: array.method(callback)
*/
strings.forEach((string, index, arr) => {
    console.log(`${string} has an index of ${index}`);
})

const students = [
    {
        name: "Chinedu",
        age: 22,
        course: "Computer Science"
    },
    {
        name: "Amaka",
        age: 20,
        course: "Imformation Technology"
    },
    {
        name: "David",
        age: 24,
        course: "Software Engineer"
    },
]
students.forEach((student, index) =>{
    // console.log(student.name);
    // console.log(student.course);
    // console.log(".........................");

    console.log(`${index + 1}. ${student.name} - ${student.course}`)


})



const products = [
    {
        name: "Laptop",
        price: "500000",
        category: "Eletronics"
    },

    {
        name: "Office Chair",
        price: "85000",
        category: "Furniture"
    },

    {
        name: "Backpack",
        price: "25000",
        category: "Accessory"
    },

    {
        name: "Headphones",
        price: "45000",
        category: "Gadgets"
    }
]

products.forEach((product, index) =>{
    console.log(`${index + 1}. ${product.name} - ${product.price}`)
})



/* 
  2. ====filter() method====
    - it returns a new array
    - it doesn't modify the original array
    syntax: array.method(callback)
*/
const filteredProducts = products.filter((product, index) => {
    // return product.category !== "Eletronics";
    // return product.price > 50000;
    return index % 2 !== 0;
});
console.log(filteredProducts);

{
    const strings = ["a", "b", "c", "d", "e"];
    // const filteredString =  strings.filter((string) => {
    //     return string !== "d";

    // });
    const filteredString =  strings.filter((string => string !== "d"))

    console.log(filteredString);
    console.log(strings)
}



/*
Create a JavaScript object called shoppingCart that represents a customer's shopping cart.

The object should have a cartItems property, which is an array containing the items in the cart. Each item should be represented as an object with a name, price, and quantity.

Your shoppingCart object should have the following methods:

1.⁠ ⁠addItem(name, price, quantity)
Adds a new item to the cart.
Example: shoppingCart.addItem("Keyboard", 25000, 2);

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
    total: 0,

    addItem(name, price, quantity) {
        this.cartItems.push({ name, price, quantity });
    },
    calculateTotal() {
        let totalItemAmount = 0;
        for (const item of this.cartItems) {
            totalItemAmount = totalItemAmount + (item.price * item.quantity);
        }
        this.total = totalItemAmount;
        return totalItemAmount;
    },
    displayCart() {
        for (const item of this.cartItems) {
            console.log(`Item Name: ${item.name}`);
            console.log(`Item Price: ${item.price}`);
            console.log(`Item Quantity: ${item.quantity}`);
        }
    },
    checkout() {
        if (this.cartItems.length === 0) {
            console.log("Your cart is empty");
        } else {
            console.log(`Total amount to be paid: ${this.total}`);
            this.cartItems = [];
        }
    },
    getcartItems() {
        return this.cartItems;
    },
    clearCart() {
        this.cartItems = [];
    }
}
shoppingCart.addItem("Laptop", 500000, 2);
shoppingCart.addItem("Mouse", 5000, 3);
shoppingCart.addItem("Keyboard", 15000, 5);

console.log(shoppingCart.getcartItems());
console.log("....................");
shoppingCart.displayCart();
console.log("....................");
console.log(`Total amount: ${shoppingCart.calculateTotal()}`);
console.log("....................");
console.log(shoppingCart.total);   
console.log("....................");
shoppingCart.checkout();
console.log("....................");
console.log(shoppingCart.getcartItems());   


// 3. ====map() method====
// used to create a new array by transforming each element of the original array using a callback function. It does not modify the original array.

// syntax: array.method(callback)

// example:
// const team = [
//     {
//         name = "Arsenal",
//         city = "London",
//         trophies = 48
//     },
//     {
//         name = "Barcelona",
//         city = "Barcelona",
//         trophies = 98
//     },
//     {
//         name = "Bayern Munich",
//         city = "Munich",
//         trophies = 83
//     }
// ]

/*

const prices = [1200, 4500, 3000, 800];
Task:

Using the map() method:

create a new array called discountedPrice

apply 10% discount to each price


return the new array 
*/

const prices = [1200, 4500, 3000, 800];
const discountedPrice = prices.map((price) => {
    return price - (price * 0.1);
})
console.log(discountedPrice);

// another example of map() method:
// thripple the numbers in the array
const numbers = [1, 2, 3, 4, 5];
const trippledNumbers = numbers.map((number) => {
    return number * 3;
})
console.log(trippledNumbers);

// another example of map() method:
// change the array of strings to uppercase
const fruits = ["apple", "banana", "cherry"];
const uppercaseFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
});
console.log(uppercaseFruits);

// another example of map() method:
const customers = [ "Chioma", "David", "Amina", "Tunde"];
// task: using the map method, return the first 3 letters of each name in the array and return a new array with the result
const firstThreeLetters = customers.map((customer) => {
    return customer.slice(0, 3);
});
console.log(firstThreeLetters);

// classwork:
/*
    using map():
    return a new array of object
    add a new property called status
    "pass" if score is 50 and above
    "fail" if score is below 50
    expected output:
    
        { name: "Chinedu", score: 45, status: "fail"},
*/

{
    const students = [
        { name: "Chinedu", score: 45},
        { name: "Amaka", score: 80},
        { name: "David", score: 67},
        { name: "Amina", score: 92}
    ];

    const studentStatus = students.map((student) => {
        let status;

        if (student.score >= 50) {
            status = "pass";
        } else {
            status = "fail";
        }
        return {
            name: student.name,
            score: student.score,
            status: status
        }
    })
    console.log(studentStatus);
}

/* 



==================== Task =====================

You are given user data from a backend:

// const users = [
//   { id: 1, firstName: "Jane", lastName: "Doe", isActive: true },
//   { id: 2, firstName: "Mark", lastName: "Smith", isActive: false },
//   { id: 3, firstName: "Sarah", lastName: "Johnson", isActive: true }
// ];

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
{
    const users = [
    { id: 1, firstName: "Jane", lastName: "Doe", isActive: true },
    { id: 2, firstName: "Mark", lastName: "Smith", isActive: false },
    { id: 3, firstName: "Sarah", lastName: "Johnson", isActive: true }
    ];
    const newUsers = users.map((user) => {
        return {
            id: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            isActive: user.isActive ? "Active User" : "Inactive User"
        };
    })
    console.log(newUsers);
    console.log(users)
}

// Reduce method
// it doesn't modify the original arrayy
// it return a single value
// syntax: array,reduce(callback function, initial value)

{
    const prices = [1000, 3500, 7000, 1500];
    const totalPrices = prices.reduce((acc, price) => acc + price, 0); // implicit
    console.log(totalPrices);

    // what is accumulated value?
    // 0 + 1000 = 1000
    // 1000 + 3500 = 4500
    // 4500 + 7000 = 11500
    // 11500 + 1500 = 13000
}

{
    const products = [
        {
            name: "Laptop",
            price: 500000,
            category: "Eletronics"
        },

        {
            name: "Office Chair",
            price: 85000,
            category: "Furniture"
        },

        {
            name: "Backpack",
            price: 25000,
            category: "Accessory"
        },

        {
            name: "Headphones",
            price: 45000,
            category: "Gadgets"
        }
    ]
    // using implicit
    const totalProductPrice = products.reduce((acc, product) => acc + product.price, 0)

    // using explicit
    // const totalProductPrice = products.reduce((acc, product) => {
    //     return acc + product.price
    // }, 0);
    console.log(totalProductPrice)
}

{
    const products = [
        {
            name: "Laptop",
            price: 500000,
            category: "Eletronics",
            quantity: 2
        },

        {
            name: "Office Chair",
            price: 85000,
            category: "Furniture",
            quantity: 5
        },
    ]
    
    const totalPrice = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    console.log(totalPrice) 
}
