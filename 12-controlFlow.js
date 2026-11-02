/* 
CONTROL FLOW TYPES
    1. Conditional control flow
        - if
        - if..else
        - elseif
        -swith
        -Ternary

    2. Loop control flow
        - for
        - while
        - Do..while

*/

// CONDITIONAL STATEMENT
// in conditional statement we usually make use of comparism operators and logical operators

// 1. if statement

/*
 syntax:

 if (condition) {
    code to be executed if the condition is true}
*/

const userAge = 13;

if (userAge >= 18) {
    console.log("user can vote")
}

// 2. if else statements;  only execute a block of code only when its true
/*
syntax:

if (condition) {
    code to be executed if the condition is true
} else {
    code to be executed if the condition is false
}
*/

const evenNumber = 20;
if (evenNumber % 2 === 0) {
    console.log(`${evenNumber} is even`);

} else {
    console.log(`${evenNumber} is odd`);
}

const oddNumber = 19;
if (oddNumber % 2 === 1) {
    console.log(`${oddNumber} is odd`);

} else {
    console.log(`${oddNumber} is even`);
}

// 3. else..if statement
//  it allows us to execute multiple conditions and take different actions
/*
syntax:
if (condition) {
    code to be executed if the condition is true
} else if{
    code to be executed if the condition is not true
} else {
    another code to be executed if it did'nt meet either conditions
}
*/
const buttonType = "primary";
if (buttonType === "primary") {
    console.log("use the primary button");
} else if (buttonType ==="outline") {
    console.log("use the outline button");
    
} else {
    console.log("use the normal button")
}

// CLASS ACTIVITY

// 20 - 30 (Great score)
// 15 - 19 (Good score)
// 0 - 14 (Can do better)

const studentScore = 39;

if (studentScore > 30) {
    console.log("Above Range");
} else if (studentScore >= 20 && studentScore <= 30){
    console.log("Great Score");
} else if (studentScore >= 15 && studentScore <= 19) {
    console.log("Good Score");
} else {
    console.log("can do better");
}

/*
    A school grading system
    90 and above -> Grade A
    70 to 89 -> Grade B
    50 to 69 -> Grade C
    Below 50 -> Fail 

    write a Javascript if....else statement to check the score and print the the correct grade
*/ 


const grade = 0;
if (grade > 90) {
    console.log("Grade A");
} else if (grade >= 70 && grade <= 89) {
    console.log("Grade B");
} else if(grade >= 50 && grade <= 69) {
    console.log("Grade C");
} else{
    console.log("Fail")
}

/* 
class activity
0 = Monday
1 = Tuesday
2 = Wednesday
3 = Thursday
4 = Friday
5 = Saturday
6 = Sunday
*/

const day = 9;
if (day === 0) {
    console.log("Monday");
} else if (day === 1) {
    console.log("Tuesday");
} else if (day === 2) {
    console.log("Wednessday");
} else if (day === 3) {
    console.log("Thursday");
} else if (day === 4) {
    console.log("Friday");
} else if (day === 5) {
    console.log("Saturday");
} else if (day === 6) {
    console.log("Sunday");
} else {
    console.log("Not a day of the week")
}

// 3. switch statement
// it's another appraoch for else..if statement.
// it's used to select one out of many code blocks to execute based on a single variable value
/*
syntax:

switch (expression) {
    case value1:
        code to run if expression === value1
        break; stops execution here
    case value2:
        code to run if expression === value2
        break; 
    default:
        code to run if no case mathes (optional)

}

*/

// class
const weekDays = 6;

switch(weekDays) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
         break;
    case 3:
        console.log("Thursday");
         break;
    case 4:
        console.log("Friday");
         break;
    case 5:
        console.log("Saturday");
         break;
    case 6:
        console.log("Sunday");
         break;
    default:
        console.log("No day available");
};

const role = "admin";
switch (role) {
    case "admin":
        console.log("Full access granted");
        break;
    case "editor":
        console.log("Limited adit access");
        break;
    case "Viewer":
        console.log("Read-only access")
        break;
    default:
        console.log("No access");
}

// fall throuhh behaviour
const userRole = "admin";

switch (userRole) {
    case "admin":
    case "editor":
        console.log("full access");
        break;
    case "viewer":
        console.log("read access");
        break;
    default:
        console.log("no access");
}


const signal = "red";
switch (signal) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("no light");
}

// fall throuhh behaviour
// used to group two or more variables together
const userAccess = "editor";

switch (userAccess) {
    case "admin":
    case "editor":
        console.log("full access");
        break;
    case "viewer":
        console.log("read access");
        break;
    default:
        console.log("no access");
}

const mark = 39;
//  0 - 14 =====> print "Poor performance"
//  15 - 29 =====> print "Fair performance"
//  30 - 39 =====> print "Good performance"
//  40 - 50 =====> print "Great performance"
// otherwise print "not a grade"
switch (true) {
    case mark >= 40 && mark <= 50:
        console.log("Great performance");
        break;
    case mark >= 30 && mark <= 39:
        console.log("Good performance");
        break;
    case mark >= 15 && mark <= 29:
        console.log("Fair performance");
        break;
    case mark >= 0 && mark <= 14:
        console.log("poor performance");
        break;
    default:
        console.log("Not a grade");
}



