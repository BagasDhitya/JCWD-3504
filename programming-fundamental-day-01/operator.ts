let numberA: number = 10
let numberB: number = 3

let sum: number = numberA + numberB
let diff: number = numberA - numberB
let multiplication: number = numberA * numberB
let division: number = numberA / numberB
let modulus: number = numberA % numberB
let exponent: number = numberA ** numberB

// console.log('sum : ', sum)
// console.log('diff : ', diff)
// console.log('multiplication : ', multiplication)
// console.log('division : ', division)
// console.log('modulus : ', modulus)
// console.log('exponential : ', exponent)

// -- Unary Operator
let num: number = 5

let negativeNum: number = -num // unary minus
// console.log(negativeNum)

let textNumber: string = '1234'
let converted = +textNumber // unary plus
// console.log(typeof converted) // ketika dicetak, maka tipe data textNumber menjadi number

// -- Shorthand Operator
let shortNumber: number = 12

// shortNumber += 5
// console.log('after sum with 5 : ', shortNumber)

// shortNumber -= 2
// console.log('after decrease with 2 : ', shortNumber)

// shortNumber *= 2
// console.log('after multiple with 2 : ', shortNumber)

// -- Increment & Decrement
let variousNumber: number = 10

// increment : menambah sebanyak 1x
// variousNumber++;
// console.log('after increment : ', variousNumber)

// decrement : mengurangi sebanyak 1x
// variousNumber--;
// console.log('after decrement : ', variousNumber)

// -- Postfix & Prefix form
// postfix : nilai dikembalikan dulu, baru ditambah
let a: number = 15
let result1: number = a++

console.log('Postfix result : ', result1)
console.log('After postfix : ', a)

// prefix : nilai ditambah dulu, baru dikembalikan
let b: number = 20
let result2: number = ++b

console.log('Prefix result : ', result2)
console.log('After prefix : ', b)
