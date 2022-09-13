"use strict"
/*

// Number Practices

// 1.
const findSmallest = function(arr) {
    const smallestArr = Math.min(...arr);
    return smallestArr;
};
console.log(findSmallest([30, 45, 60, 7]));

// 2.
const factorializer = function(num) {
    if (num < 0) {
        return -1
    } else if (num === 0) {
        return 1;
    } else {
        return (num * factorializer(num - 1))
    }
}
console.log(factorializer(5));

// 3.
const oddOrEven = function(num) {
    if(num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(oddOrEven(7));

// 4.
const evenOnly = function(arr) {
    const filterEven = arr.filter(x => x % 2 === 0);
    return filterEven;
};
console.log(evenOnly([1, 2, 3, 4, 5, 6]));

// 5.
const numbersOnly = function(num) {
    const filterNumbers = num.filter(x => typeof x === "number");
    return filterNumbers;
}
console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));

// 6.
const addUp = function(num) {
    if(num <= 1) {
        return num
    } else {
        return num + addUp(num - 1);
    }
}; 
console.log(addUp(12));

// 7.
const minMaxLengthAverage = function(arr) {
    // Get the lowest element
    const lowestArr = Math.min(...arr);
    // Get the highest element
    const highestArr = Math.max(...arr);
    // Get the length of array
    const arrLength = arr.length;
    // Get the Average of all element;
    const arrAverage = arr.reduce((acc, curr) => acc + curr, 0) / arrLength;
    // Store these criteria in a new array
    return [lowestArr, highestArr, arrLength, arrAverage]
};
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

// 8.
const getAbsSum = function(arr) {
    const absSum = arr.reduce((acc, curr) => acc + curr);
    return Math.abs(arr.reduce(absSum));
};
// getAbsSum([-1, -3, -5, -4, -10, 0]);

// 9.
const countWords = function(word) {
    const words = word.split(" ")
    return words.filter(x => x !== "").length;
};
console.log(countWords('Walk the dog'));

// 9.(2)
const countWords2 = function(word) {
    const words = word.split("").length;
    return words
};
console.log(countWords('Buy   groceries'));

// 10.
const MultiplyByLength = function(multi) {
    let multiply = [];
    for (let x of multi) {
        multiply.push(x * multi.length);
    }
    return multiply;
};
console.log(MultiplyByLength([6, 2, 1]));

// 10.(2)
const MultiplyByLength2 = function(multi) {
    const mapped = multi.map(x => x * multi.length);
    return mapped
};
console.log(MultiplyByLength2([10, 2, 5, 45, 46, 12, 7]));
*/  