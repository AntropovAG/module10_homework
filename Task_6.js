// 6. Check all array elements

const array2 = [2, 2, 2];

let falseState = 0;

for (let i = 1; i < array2.length; i++) {
    if (array2[0] !== array2[i] ) {
        falseState++
    }
}

if (falseState > 0) {
    console.log("false")
} else {
    console.log("true")
}