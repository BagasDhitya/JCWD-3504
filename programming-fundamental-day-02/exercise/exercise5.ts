
// Bilangan fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, dst.

// Psuedo code untuk exercise 5

// Input Y
// If Y >= 1, print 0
// If Y >= 2, print 1
// Loop i from 3 to Y
// next = a + b
// print next
// update a = b, b = next

// solusi :
let Y: number = 15 // contoh input
let a: number = 0
let b: number = 1
let count: number = 0

if (Y >= 1) {
    console.log(a)
    count = count + 1
    // count = 1
}

if (Y >= 2) {
    console.log(b)
    count = count + 1
    // count = 2
}

while (count < Y){
    let next = a + b
    // next = 1
    console.log(next)
    a = b
    // a = 1
    b = next
    // b = 1
    count = count + 1
    // count = 3
}
