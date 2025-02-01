//forEach

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

myForEach([1, 2, 3], (num) => console.log(num * 2));

//map

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

console.log(myMap([1, 2, 3], num => num * num)); // [1, 4, 9]

//filter

function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(myFilter([1, 2, 3, 4, 5], num => num % 2 === 0)); // [2, 4]

//find

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(myFind([1, 2, 3, 4, 5], num => num > 2)); // 3

//indexOf

function myIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(myIndexOf([10, 20, 30, 40], 30)); // 2
console.log(myIndexOf([10, 20, 30, 40], 50)); // -1

//includes

function myIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(myIncludes([10, 20, 30, 40], 30)); // true
console.log(myIncludes([10, 20, 30, 40], 50)); // false

//reverse

function myReverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(myReverse([1, 2, 3, 4])); // [4, 3, 2, 1]

