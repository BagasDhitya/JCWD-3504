// Pseudo code untuk exercise 2

// Input number
// If number <= 1
// Not prime
// Else
// Loop i from 2 to number - 1
// If number mod i == 0
// Not prime
// Stop
// If no divisor found
// Prime

// solusi :
let targetNumber: number = 7
let isPrime: boolean = true // asumsi kita, isPrime nilai defaultnya adalah true untuk inisiasi awal

if (targetNumber <= 1) {
    isPrime = false
} else {
    let i: number = 2
    while (i < targetNumber) {
        if (targetNumber % i == 0) {
            isPrime = false
        }
        i = i + 1
    }
}

if (isPrime) {
    console.log(targetNumber, " is a prime number")
} else {
    console.log(targetNumber, " is not a prime number")
}