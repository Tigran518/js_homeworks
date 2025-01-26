// Problem 1: Number of Days in a Month
// Write a function that takes the name of a month as an argument and returns the number of days in that month.
// Requirements:
// Use switch...case to determine the number of days in the month.
// If the argument does not match any valid month, return “Invalid month”.
// Use if...else to check if the current year is a leap year (February should have 29 days in a leap year).

function daysInMonth(month,year) {
    let numOfDays;

    switch (month) {
        case "January": numOfDays = 31; break;
        case "February": 
            if (year % 4 != 0) {
                numOfDays = 29;                 
            } else {
                numOfDays = 28;                 
            }
            break;
        case "March": numOfDays = 31; break;
        case "April": numOfDays = 30; break;
        case "May": numOfDays = 31; break;
        case "June": numOfDays = 30; break;
        case "July": numOfDays = 31; break;
        case "August": numOfDays = 31; break;
        case "September": numOfDays = 30; break;
        case "October": numOfDays = 31; break;
        case "November": numOfDays = 30; break;
        case "December": numOfDays = 31; break;
        default: numOfDays = "Invalid month";
    }

    return numOfDays;
}

let month = prompt("Enter the month");//"March";
let year = prompt("Enter the year");//2022;
console.log(daysInMonth(month,year));


// Problem 2: Swap Keys and Values of an Object
// Write a function that takes an object and returns a new object where the keys and values are swapped.
// javascript


// const obj = { a: "1", b: "2", c: "3" };

// const swapped = swapKeysAndValues(obj);
// // Output: { "1": "a", "2": "b", "3": "c" }


function swapObjectElsements(obj) {
    

    return obj;
}

const obj = { a: "1", b: "2", c: "3" };
console.log(swapObjectElsements(obj));
