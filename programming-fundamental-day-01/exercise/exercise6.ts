// Pseudo Code untuk menghitung selisih hari diantara kedua tanggal

// SET date1 = "2022-01-20"
// SET date2 = "2022-01-22"
// CONVERT date1 and date2 to Date
// SET diffMilliseconds = date2 - date1
// SET diffDays = diffMilliseconds / (1000 * 60 * 60 * 24)
// DISPLAY diffDays

// solutions :
let date1: Date = new Date("2022-01-20")
let date2: Date = new Date("2022-01-22")

let diffMilliseconds: number = date2.getTime() - date1.getTime() // dalam milidetik
let diffDays: number = diffMilliseconds / (1000 * 60 * 60 * 24) // konversi ke hari

console.log('Difference in days : ', diffDays)
