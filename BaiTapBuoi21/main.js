//Task 1
const classA = ["An", "Binh", "Chi"]
const classB = classA
classB[0] = "An Updated"
console.log(classA)

//Task 2
let x = "10"
let y = 2
console.log(x + y)
// result: 102, this is because x is string then y is number so y = 2 is transformed to string because "+" is priority to transform to string so that the operation can be caculated

console.log(x - y)
//result: 8 "-" will transform string to number

console.log(x * 3)
//result: 30 "-", "*" will transform string to number

console.log("Hello" -y)
//result: NaN -> this is because "hello" is not a number so it cannot be changed to number

//Task 3
case 1
let age = 9
let mathScore = 10
let isVIP = false

let canEnter = ( age >= 10 && mathScore > 7) || isVIP

console.log(canEnter)

//case 2
let age = 9
let mathScore = 10
let isVIP = true

let canEnter = ( age >= 10 && mathScore > 7) || isVIP

console.log(canEnter)

//Task 4
const laptop = {
    brand: "Dell",
    price: 1000,
    spec: { ram: "8GB", ssd: "256GB"}
}

const myLaptop = laptop;
myLaptop.brand = "Apple"

const mySpec = laptop.spec;
mySpec.ram = "16GB"

console.log(laptop.brand)
console.log(laptop.spec.ram)
//laptop.brand will be Apple and laptop.spec.ram will be 16GB
// Since both "myLaptop" and "mySpec" hold references to the original "laptop" object and its inner "spec" object rather than creating new copies, they all point to the exact same spot in memory. As a result, any changes made through "myLaptop.brand" or "mySpec.ram" directly update the data within the original "laptop" object.
