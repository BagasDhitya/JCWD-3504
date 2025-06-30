// Pseudo untuk exercise 3

// Input N
// Set sum = 0
// Loop i from 1 to N
// sum = sum + i
// Output sum

// solusi :
let N: number = 5
let sum: number = 0 // untuk nampung hasil penjumlahan 1 sampai N
let i: number = 1 // inisiasi awal untuk perulangan/looping

while (i <= N) {
    sum = sum + i
    console.log("sum : ", sum)
    i = i + 1
    console.log("i : ", i)
}

console.log("Sum from 1 to " + N + " is " + sum)
