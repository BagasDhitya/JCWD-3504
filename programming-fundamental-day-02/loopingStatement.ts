// --- FOR LOOP STATEMENT

// case 1 : mencetak hello world sebanyak 3x

let text: string = "Hello World"

// for (let i = 0; i < 3; i++) {
//     console.log(text)
// }

// let i = 0 -> kondisi awal
// i < 3 -> mau berapa kali loopingnya
// i++ -> increment, artinya looping akan maju atau mundur jalannya

// console.log(" ----------------------------- ")

// case 2 : reminder bangun pagi sebanyak 6x alarm

// for (let i = 0; i <= 5; i++) {
//     console.log('Reminder : ' + i + " bangun pagi!")
// }

// console.log(" ----------------------------- ")

// case 3 : menghitung total belanjaan
let prices: number[] = [12000, 15000, 8000]
let total: number = 0

// for (let i = 0; i < prices.length; i++) {
//     total += prices[i]
// }

// console.log('Total Belanja : ', total)

// case 4 : cetak nama hari kerja

let days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// console.log('days length : ', days.length) // -> untuk membaca panjang index dari array days
// console.log('days index 1 : ', days[1]) // -> untuk mengakses isi index ke 1
// console.log('days index 2 : ', days[2]) // -> untuk mengakses isi index ke 2

// for (let i = 0; i < days.length; i++) {
//     console.log(`Hari kerja ke-${i + 1} : ${days[i]}`)
// }

// --- WHILE LOOP STATEMENT

// case 1 : menyalakan alarm 3 kali
let count: number = 1

// while (count <= 3) {
//     console.log(`Alarm bunyi ke-${count}`)
//     count++
// }

// console.log(" ----------------------------- ")

// case 2 : hitung mundur dari 5
let randomNumber: number = 5

// while (randomNumber > 0) {
//     console.log(randomNumber)
//     randomNumber--
// }

// case 3 : menjumlahkan angka dari 1 - 100
let i: number = 1
let totalCount: number = 0

// while (i <= 100) {
//     totalCount += i
//     i++
// }

// console.log(" ----------------------------- ")
// console.log("Jumlah total : ", totalCount)

// --- DO WHILE LOOP STATEMENT

// case 1 : simulasi mesin ATM

// 1. lihat saldo
// 2. tarik tunai
// 3. keluar

let choice: string = ""

// do {
//     console.log("Menu : ")
//     console.log("1. Lihat saldo")
//     console.log("2. Tarik tunai")
//     console.log("3. Keluar")

//     choice = "3"
// } while (choice !== "3")

// console.log("Terima kasih telah menggunakan layanan kami")

// case 2 : mengisi gelas sampai penuh
let glassLevel: number = 0
const fullLevel: number = 5

do {
    console.log(`Menuangkan air ... Level sekarang : ${glassLevel + 1}`)
    glassLevel++
} while (glassLevel < fullLevel)

console.log("Gelas sudah penuh!")
