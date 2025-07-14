// Pseudo Code untuk konversi hari ke tahun, bulan, hari

// SET totalDays = 400
// SET years = totalDays / 365 -> ambil bilangan bulat saja
// SET remainingDays = totalDays % 365
// SET months = remainingDays / 30 -> ambil bilangan bulat saja
// SET days = remainingDays % 30
// DISPLAY years, months, days

// solutions :

let totalDays: number = 400 // dalam exercise ini, bisa diswitch juga jadi 366 hari
let years: number = Math.floor(totalDays / 365)
let remainingDays: number = totalDays % 365
let months: number = Math.floor(remainingDays / 30)
let days: number = remainingDays % 30

console.log(`${years} year, ${months} month, ${days} days`)