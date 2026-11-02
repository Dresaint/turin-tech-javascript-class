// math.round().  it is used to round up a number
let number = Math.round(4.78);
console.log(number);

// Math.floor().  it round a number down
let floor = Math.floor(4.78);
console.log(floor);

//Math.ceil().  it always round a number up
let ceil = Math.ceil(7.1);
console.log(ceil);

// Math.random(). it generate any random number between 0 - 1
console.log(Math.random());

// Math.max().  it returns the largest number
let largest = Math.max(40, 10, 5, 9);
console.log(largest);

// Math.min().  it returns the smallest number
let smallest = Math.min(40, 10, 5, 9);
console.log(smallest);

// Math.pow() .  it raises a number to a power (it helps to implement exponenciation. the first argument is the base while the second argument is the power)
console.log(Math.pow(7, 2));

const myNum = 10;
console.log(Math.pow(myNum, 3));

// Math.sqrt();   it returns the square root of a number
let result = Math.sqrt(25);
console.log(result);

// Math.abs(); returns the absolute value of a number and removes the negative sign
let absolute = Math.abs(-10);
console.log(absolute);

// Math.trunc();   removes the decimal part of a number
let truncs = Math.trunc(5.986);
console.log(truncs)

// GENERATING RANDOM NUMBERS
/*
    Math.floor(Math.random() * (max - min) + min)
    This works with min (included) and max (excluded)

    Math.floor(Math.random() * (max - min + 1)) + min
    This workswith both min and max inclusive
*/

// 1 and 89
{
    const maxNumber = 89;
    const minNumber = 1;
    const result = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    console.log(result);
}

{
    const maxNumber = 878788;
    const minNumber = 144444;
    const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    console.log(result);
}