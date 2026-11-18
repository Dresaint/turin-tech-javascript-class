// Destructuring of arrays

const staffSalaries = [100000, 200000, 150000, 55000, 75000, 95000];
const [staff1, , staff3, ...restOfSalaries] = staffSalaries;
console.log(staff1, staff3);
console.log(restOfSalaries);

// Destructuring of objects

const worker = {
    fullName: "Dre Saint",
    age: 25,
    role: "Software Engineer",
    experienceLevel: "Mid-Level",
    skills: ["React.js", "Typescript", "Tailwind css", "Node", "Express"]
}

// destructuring allows us to rename.. incase we already have fullName as a variable elsewhere
// i changed fullName to fullWorkerName
const {fullName: fullWorkerName, skills, role, ...restOf} = worker;
console.log(fullWorkerName);
console.log(`${fullWorkerName} is a ${role} and has skills in ${skills.join(", ")}`)
console.log(restOf)

const user = {
    fullName: "Dre Saint",
    age: 25,
    role: "Software Engineer",
    experienceLevel: "Mid-Level",
    skills: ["React.js", "Typescript", "Tailwind css", "Node", "Express"],
    location: {
        state: "Enugu",
        country: "Nigeria"
    }
}

const {skills: [skill1, , skill3, ...restOff], location: {state}} = user;
console.log (skill3);
console.log(state);
console.log(restOff)