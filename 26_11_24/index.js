// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// for (let i = 0; i < 10; i++) {
//     let stars = "";
//     for (let j = 0; j <= i; j++) {        
//         stars += '*';
//     }
//     console.log(stars);
// }

//--------------------------------------------------------------------------------------------

//includes implementation
//Եթե տարրը կա զանգվածի մեջ, վերադարձնում է true, հակառակ դեպքում՝ false:
// const sentence = 'JavaScript is awesome!';

//console.log(sentence.includes('JavaScript')); // true

// let text = "t";
// let flag = false;
// for (let i = 0; i < sentence.length; i++) {
//     if (text == sentence[i]) {
//         flag = true;
//     }
// }
// console.log(flag);

//--------------------------------------------------------------------------------------------
// Problem 1: Student Grades
// Description:
// You are provided with an array of students, where each student is represented as an object. Each object contains the student’s name and their score. Your task is to determine the grade status of each student using a for loop and a switch statement.

/*
i >= 90 → “Excellent”
i >= 75 → “Good”
i >= 50 → “Pass”
default → “Fail”
*/

// const students = [
//     { name: "Anna", grade: 85 },
//     { name: "Mariam", grade: 92 },
//     { name: "Olivia", grade: 76 },
//     { name: "Emma", grade: 59 },
// ];

// for (let i = 0; i < students.length; i++) {
//     // if (students[i].grade >= 90) {
//     //     console.log("Excellent");
//     // } else if (students[i].grade >= 75) {
//     //     console.log("Good");
//     // } else if (students[i].grade >= 50) {
//     //     console.log("Pass");
//     // } else {
//     //     console.log("Fail");
//     // }

//     switch (true) {
//         case students[i].grade >= 90:
//             console.log(students[i].name, ": Excellent");
//             break;
        
//         case students[i].grade >= 75:
//             console.log(students[i].name, ": Good");
//             break;
        
//         case students[i].grade >= 50:
//             console.log(students[i].name, ": Pass");
//             break;
    
//         default:    
//             console.log(students[i].name, ": Fail");
//             break;
//     }
// }

// Problem 2: Car Speeds
// Description:
// You are given an array of cars, where each car has a model and speed (in km/h). 
//Your task is to identify which cars are exceeding 120 km/h and which are safe (≤120 km/h). 
//Store the safe cars and speeding cars in separate arrays. Use a for loop and a if else statement.

// const cars = [
//     { model: "Toyota", speed: 100 },
//     { model: "BMW", speed: 150 },
//     { model: "Lada", speed: 80 },
//     { model: "Audi", speed: 130 },
//     { model: "Mercedes-Benz", speed: 260 }
// ];

// const safeCars = [];
// const speedingCars = [];

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].speed > 120) {
//         speedingCars.push(cars[i].model);
//     } else {
//         safeCars.push(cars[i].model);
//     }
// }

// console.log("Safe cars are -",safeCars);
// console.log("Speed cars are -",speedingCars);

// Problem 3: Longest Text
// Given an array of strings ["React", "JavaScript", "Redux", "PHP", "C#"]:
// Write a program to find the longest word in the array.
// Solution in JavaScript using only for loop and arrays:

// let arr = ["React", "JavaScript", "Redux", "PHP", "C#"];
// let longestWordInArr = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (longestWordInArr.length < arr[i].length) {
//         longestWordInArr = arr[i];
//     }
// }
// console.log(longestWordInArr);
