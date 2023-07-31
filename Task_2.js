// 2. Check type of a variable

let x;

if (typeof x === "string") {
    console.log("It is a string")
} else if (typeof x === "number") {
    console.log("It is a number")
} else if (typeof x === "boolean") {
    console.log("It is a boolean")
} else {
    console.log("Type is not defined")
}