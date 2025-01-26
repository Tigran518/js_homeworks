// Problem 1:  Find Common Characters Between Two Strings
// Description: Write a program that checks how many characters are common between two strings, without using new Set, and  function.

const str1 = "edctr";
const str2 = "redux";
let commonCount = 0; 
let checkedChars = '';

for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] == str2[j]) {
            commonCount++;
            checkedChars += str1[i];
        }
    }
}

console.log("Common characters count is -", commonCount);
console.log("Common characters are -", checkedChars);