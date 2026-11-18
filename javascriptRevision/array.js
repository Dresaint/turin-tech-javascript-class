const cars = ["toyota", "nissan", "bmw", "audi", "honda", "ford",]

// Filter()
// const filterResult = cars.filter(car => car !== "nissan");
const filterResult = cars.filter(car => {
     return car !== "nissan";
})
console.log(filterResult)

const workers = [
    {name: "John Doe", age: 22},
    {name: "Sule Abreham", age: 25},
    {name: "Sandra Luis", age: 19},
    {name: "Cynthia Sax", age: 21},

];
// const workersResult = workers.filter(worker => worker.age >= 22);
const workersResult = workers.filter(worker => {
    return worker.age >= 22;
})
console.log(workersResult)

// Map()
const workersMapReesult = workers.map(worker => {
    return {
        fullName: worker.name,
        age: worker.age,
        isEligible: worker.age >= 21 ? "YES" :  "NOT ELIGIBLE"
    }
})
console.log(workersMapReesult);
