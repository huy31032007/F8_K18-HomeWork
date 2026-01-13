//Task1

function findTriangle(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || a <= 0 || b <= 0 || c <= 0) {
        return 'Invalid input'
    }
    if ( a + b <= c || a + c <=b || b + c <= a){
        return 'Not a triangle'
    }else if (a === b && b === c){
        return 'Equilateral triangle'
    }else if (a === b || a === c || b === c){
        return 'Isosceles triangle'
    }else if (a*a===b*b+c*c || b*b===a*a+c*c || c*c===a*a+b*b){
        return 'Right triangle'
    }else{
        return 'Scalene triangle'
    }
}
console.log(findTriangle(0,0,0))

//Task 2

function findSquareNumber(n){
    if (typeof n !=='number' || n <=0){
        return 'Invalid input'
    }else if ( (n ** 0.5) ** 2 ===n) {
        return 'Square number'
    }else{
        return 'Not a square number'
    }
}

console.log(findSquareNumber(8))