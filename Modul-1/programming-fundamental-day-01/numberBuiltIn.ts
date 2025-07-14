let value: number = 123.456

// 1. toFixed
console.log("toFixed(1) : ", value.toFixed(1))

// 2. toExponential
console.log("toExponential() : ", value.toExponential())

// 3. toString
console.log("Convert to string : ", typeof value.toString())

// 4. parseInt
let numericString = '42px'
console.log('Convert to number : ', parseInt(numericString))

// 5. isNan
let alphabet: number = Number("abc")
console.log('is not a number : ', isNaN(alphabet))