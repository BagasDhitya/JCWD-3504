let message: string = "Hello World anjay"

// 1.length
console.log("length : ", message.length)

// 2. toUpperCase
console.log("upper case : ", message.toUpperCase())

// 3. toLowerCase
console.log("lower case : ", message.toLowerCase())

// 4. includes
console.log("includes 'anjay' : ", message.includes('anjay'))

// 5. slice
console.log("slice (6, 10) : ", message.slice(6, 10))

// 6. replace
console.log("replace 'anjay' with 'mantap' : ", message.replace('anjay', 'mantap'))


// -- Template Literal
let firstName: string = "John"
let lastName: string = "Doe"
let profession: string = "Developer"

// tanpa template literal
let introduction: string = "My name is " + firstName + " " + lastName + ", and I work as a " + profession
console.log(introduction)

// dengan template literal
// let introduction: string = `My name is ${firstName} ${lastName}, and I work as a ${profession}`
// console.log(introduction)