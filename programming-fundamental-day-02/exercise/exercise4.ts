// Pseudo untuk exercise 4

// Input X
// Set result = 1
// Loop j from 1 to X
// result = result * j
// Output result

let X: number = 6
let result: number = 1
let j: number = 1

while (j <= X) {
    result = result * j
    j = j + 1
}

console.log(X + "! = " + result)