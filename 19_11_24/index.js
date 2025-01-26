// Homework 1 : {
//     Multiplication Table
//      Write a for loop to print the multiplication table of a given number n (e.g., n = 5).
// Example
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50
// }

var n = 5; //prompt("Enter the number for multiplication");
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} =`, n * i);
}

// Homework 2 {
//     Write a for loop to replace all spaces in a string with hyphens (-).
//     Example Input:
//   let sentence = "I am learning JavaScript";
//      Expected Output: “I-am-learning-JavaScript”
// }

// let sentence = "I am learning JavaScript";
// let new_sentence = "";

// for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] == ' ') {
//         new_sentence += '-';        
//     } else {
//         new_sentence += sentence[i];
//     }
// }

// console.log(new_sentence);