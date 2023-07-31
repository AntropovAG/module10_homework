// 1. Check is an entered number is a number and not a string or NaN. If a number - chack if it is odd or even and console.log the result.

let userInput = prompt("Please enter a number:");
const inputVariable = + userInput;

if (typeof inputVariable === "number" && !isNaN(inputVariable)) {
    if (inputVariable % 2 === 0) {
        console.log(`${inputVariable} is an even number`)
    } else {
        console.log(`${inputVariable} is an odd number`)
    }
} else {
    console.log('Oops, is seems you made a mistake')
}