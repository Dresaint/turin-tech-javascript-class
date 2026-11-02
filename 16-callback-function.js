// callback functions are functions that are passed as arguments into functions
// it add another layer of flexibility to functions

// Example 1
function greet(name) {
    console.log(`Hello, ${name}`)
}
 function callUser(cb) {
    
    cb("Damilare"); 
 }

 callUser(greet);

function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}

// Example 2
{
    const addTwoNumber = (x, y) => x + y;

    const doExponent = (callback, x, y) => {
        const sumResult = callback(x, y);
        console.log(sumResult ** 3);
    }
    doExponent(addTwoNumber, 2, 8);
}

// Example 3
{
    function sayHello() {
        console.log("Hello World");
    }

    function greet(callback) {
        callback();
        console.log("Welcome to JS class");
    }
    greet(sayHello)
}

// Example 4
{
    const addTwoNumbers = (x, y) => x + y;
    const divide = num => num / 5;

    const doMaths = (addCb, x, y, divideCb) => {
        const addResult = addCb(x, y);
        return divideCb(addResult);
    }
    
    console.log(doMaths(addTwoNumbers, 80, 70, divide));
}

// Example 5

{
    function calculateTotal(price, taxRate) {
        return price + (price * taxRate);
    }

    function processOrder(callback, itemName, price) {
        const totalAmountPaid = callback(price, 0.1);

        console.log("Reciept of payment");
        console.log(`item: ${itemName}`);
        console.log(`Total price: ${totalAmountPaid}`);
    }

    processOrder(calculateTotal, "Laptop", 20000);
}

// Example 6
{
    function getDiscountPrice(price, discountPrice){
        return price - (price * discountPrice)
    }

    function handleOrder(cb, price, discountRate, itemName) {
        const totalAmount = cb(price, discountRate);

        console.log("Black friday is sales");
        console.log(`Discount amount: ${totalAmount}`);
        console.log(`Item name: ${itemName}`);
    }

    handleOrder(getDiscountPrice, 50000, 0.3, "55 inch smart tv");
}
/* 
    Three reasons why callback functions are important

    1. Flexibility
    2. They can be used to handle asynchronous waiting
    3. They play a key role in even handling
*/

// Example 7 using one callback for two functions

{
    function addTwoNumbers(num1, num2){
    return num1 + num2;
    }

    function subtractTwoNumbers(num1, num2){
        return num1 - num2;
    }

    function getResult(cb, num1, num2){
        const result = cb(num1, num2);
        console.log(result);
    }

    getResult(addTwoNumbers, 70, 50);
    getResult(subtractTwoNumbers, 70, 50);
}
