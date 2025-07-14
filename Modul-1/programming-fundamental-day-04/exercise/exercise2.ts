
function fizzBuzz(n: number): void {

    // loop dari 1 sampai n
    for (let i: number = 1; i <= n; i++) {
        // cek apakah selama looping ditemukan ada kelipatan 3 dan 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz") // jika kelipatan 3 dan 5, maka tampilkan FizzBuzz
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(6)
console.log(" -------- ")
fizzBuzz(15)