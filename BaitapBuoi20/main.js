//section-1//

const name="Vu Quang Huy"
let age=18
let isStudent=true

console.log("Name:", name)
console.log("Age:", age)
console.log("Is Student:", isStudent)

let a=2
let b=10

a=3
b=11
console.log("a=",a," b=",b,)

//section-2//
// Differences betweem const and let:
// Let can be reassigned a new value, const cannot be reassigned after their initial value is set
// Use "const" when you want to prevent a variable from being reassigned"

//const x=10
//x=20 => wrong, because const' value cannot be changed

//section-3//
// 100 - number
// 100 - number
// true - boolean
// [1, 2, 3] - array
//  { name: "An", age: 20} - object
// null - object
// undefined - undefined

let student = {name: "Vu Quang Huy", age: 18, score: [2, 4, 9]}
console.log(student)

//section-4//
let c="1000"
console.log(c)
c = Number(c)
console.log(c)
console.log(typeof c)

let d=1000
console.log(d)
d = String(d)
console.log(d)
console.log(typeof d)

let e=true
console.log(e)
e =String(e)
console.log(e)
console.log(typeof e)

//section-5//
//Booleans(0) - false
//Booleans(1) - true
//Booleans("") - false
// Booleans("hello") - trie
//Booleans(null) - false
//Booleans([]) - true

//section-6//
const numbers[4, 3, 1, 5, 1]
console.logo(numbers[0])
console.log(numbers[4])

// Because the 'numbers' variable stores a reference to a memory address (heap memory) rather than the actual data, assigning it to const a simply copies that address, resulting in both variables pointing to the exact same object//