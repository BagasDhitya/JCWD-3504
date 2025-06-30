// --- FOR LOOP STATEMENT

// case 1 : mencetak hello world sebanyak 3x

let text: string = "Hello World"

for (let i = 0; i < 3; i++) {
    console.log(text)
}

// let i = 0 -> kondisi awal
// i < 3 -> mau berapa kali loopingnya
// i++ -> increment, artinya looping akan maju atau mundur jalannya

console.log(" ----------------------------- ")

// case 2 : reminder bangun pagi sebanyak 6x alarm

for (let i = 0; i <= 5; i++) {
    console.log('Reminder : ' + i + " bangun pagi!")
}

console.log(" ----------------------------- ")

// case 3 : menghitung total belanjaan
let prices: number[] = [12000, 15000, 8000]
let total: number = 0

for (let i = 0; i < prices.length; i++) {
    total += prices[i]
}

console.log('Total Belanja : ', total)