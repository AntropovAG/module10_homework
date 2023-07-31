// 8. Using Map

let newArray = new Map([
    ["first item", "something cool"],
    ["second item", 2],
    ["third item", false]
]);

for (let name of newArray.keys()) {
    console.log(`Ключ - ${name}, Значение - ${newArray.get(name)}`)
}