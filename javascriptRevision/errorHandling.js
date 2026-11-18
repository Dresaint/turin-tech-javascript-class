// the try catch block allow our code to catch errorwithout stopping the execution of the rest of the code
// it allows other aspect ofd the program to continue even after an error is caught


try {
    console.log("firstline...");
    console.log(name);
    const name = "John Doe"
} catch (error) {
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
    console.log(error)

}

const userName = "Willaiam James";
console.log(userName);
console.log("code....");

try {
    // code to be executed
} catch (e) {
    console.log(e.message)
}