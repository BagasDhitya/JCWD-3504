
let amount: number = 1000
let amountStr: string = amount.toString() // konversi dari angka jadi string
let formatted: string = ""
let counter: number = 0
let x: number = amountStr.length - 1

// format dari belakang dan tambahkan titik tiap 3 digit
while (x >= 0) {
    formatted = amountStr[x] + formatted // susun dari belakang
    counter = counter + 1

    if (counter % 3 == 0 && x !== 0) {
        formatted = "." + formatted // tambahkan titik setiap 3 digit
    }

    x = x - 1
}

console.log("Rp. " + formatted + ",00")