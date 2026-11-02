// for loop
// syntax 
/* for (initialization; condition; increament) {
        code to repeat
   }
*/ 

for (let count = 1; count <= 50; count++){
    // count++ means count = count + 1
    console.log(`${count}: Chiemezie`);
};

for (let i = 0; i <=10; i++) {
    console.log(i)
};

for (let e = 70; e >= 0; e--) {
    console.log(e)
};

for (let number = 1; number <= 20; number++) {
    console.log(number)
};

for (let down = 20; down >= 0; down--) {
    console.log(down)
};

for (let even = 1; even <=50; even++) {
    if (even % 2 === 0) {
        console.log(even)
    };
}
for (let odd = 1; odd <=50; odd++) {
    if (odd % 2 === 1) {
        console.log(odd)
    };
}

// let numbers = 7
// for (let x = 1; x <=12; x++) {
//     console.log(`${numbers} * ${x} = ${numbers * x}`);
// }

// for (let i = 1; i <= 12; i++){
//   console.log(`7 * ${i} = ${7 * i} `);
  
// }

const fruits = ["pawpaw", "mango", "orange", "bababa"];
console.log(fruits[3]);

for(let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

for (let e = 1; e <=10; e++){
    console.log(e);
}

    

// WHILE LOOP
/*
syntax:

while (condition) {
    code to repeat
}

*/
let counts = 1;
while (counts <= 25) {
    console.log(counts);
    counts++
}

let myName = 1;
while (myName <= 5) {
    console.log("damilare");
    myName++
}


for(let d = 1; d<=5; d++) {
    console.log("damilareDaniels")
}

// Do while loop

let number = 10;
do{
    console.log("Number is: " + number);
    number++;
} while (number < 5);

let password = "";

