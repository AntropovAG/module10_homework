// 7. Console number of odd and even numbers in an arrya

const arrayOfNumbers = [1, 0, NaN, 2, 15, 3, 44];

let oddNumber = 0;
let evenNumber = 0;
let unknownItem = 0;
let zeroNumber = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (typeof(arrayOfNumbers[i]) !== "number" || isNaN(arrayOfNumbers[i])) {
        unknownItem++;
    } else if (arrayOfNumbers[i] === 0) {
        zeroNumber++
    } else if (arrayOfNumbers[i] % 2 === 0) {
        evenNumber++;
    } else {
        oddNumber++;
    }
}

console.log(`Array has ${oddNumber} odd numbers, ${evenNumber} even numbers, ${zeroNumber} zeroes and ${unknownItem} unknown numbers (not numbers)`)