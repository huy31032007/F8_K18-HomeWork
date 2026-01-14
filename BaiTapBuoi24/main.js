//tsk 1

function isPrime(n) {
    if(typeof n!='number'|| n<2){
        return false
    }
    for ( i = 2; i < n**0.5; i++){
        if (n % i === 0)
            return false
    }
    return true
}
console.log(isPrime(3))

//tsk 2

function isPerfectNumber(n){
    if(typeof n!='number'|| n<6){
        return false
    }
    let sum = 0

    for (let i = 1; i <=n/2;i++){
        if (n % i ===0) {
            sum += i
        }
    }
    return sum===n
}

console.log(isPerfectNumber(7))