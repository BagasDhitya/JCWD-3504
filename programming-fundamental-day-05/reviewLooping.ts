// Review Looping
// case 1 : menentukan bilangan ganjil atau genap di dalam array

let random: number[] = [10, 7, 5, 13, 20, 30, 35, 19, 17]
let result: string[] = [] // untuk nampung hasilnya, yang diharapkan ["genap", "ganjil", "ganjil", dst.]

for (let i: number = 0; i < random.length; i++) {
    if (random[i] % 2 == 0) {
        result[i] = "genap"
    } else {
        result[i] = "ganjil"
    }
}

// console.log("result : ", result)

// case 2 (for di dalam while) : mencatat jumlah barang

// seorang penjaga toko ingin mencatat jumlah barang yang dijual setiap hari selama seminggu.
// setiap hari, dia mencatat jumlah barang yang terjual di 3 shift (pagi, siang, sore).
// buatkan program untuk mencetak jumlah penjualan per hari.

const weeklySales: any = [
    [5, 8, 6], // hari ke 1
    [4, 7, 3], // hari ke 2
    [6, 9, 5], // hari ke 3
    [3, 4, 2], // hari ke 4
    [8, 6, 7], // hari ke 5
    [5, 5, 5], // hari ke 6
    [6, 7, 8] // hari ke 7
]

let day: number = 0 // penanda bahwa perhitungan dimulai dari hari pertama

// selama hari masih dalam seminggu, lakukan perulangan
// while (day < weeklySales.length) {
//     let dailyTotal: number = 0 // jumlah total barang terjual dalam sehari

//     // hitung total penjualan dari semua shift
//     for (let shift = 0; shift < weeklySales[day].length; shift++) {
//         dailyTotal = dailyTotal + weeklySales[day][shift]
//     }

//     console.log("Day ", day + 1, " - Total sales : ", dailyTotal, " items")
//     day++; // lanjut ke hari berikutnya
// }

// case 3 : write a code to remove the first occurrence of a given “search string” from a string

let text: string = "Hello World"
let search: string = "ell"
let finalResult: string = "" // untuk menyimpan hasil akhir setelah dipotong substringnya

let foundIndex: number = -1 // cari posisi kemunculan pertama dari search secara manual

for (let i: number = 0; i <= text.length - search.length; i++) {
    let match: boolean = true // untuk mengecek apakah huruf yang dibandingkan sama atau tidak

    // cek apakah substring dari posisi i cocok dengan search string
    for (let j: number = 0; j < search.length; j++) {
        if (text[i + j] !== search[j]) {
            match = false
        }
    }

    if (match) {
        foundIndex = i
    }
}

// jika ditemukan, potong string sebelum dan sesudah search
if (foundIndex !== -1) {
    for (let i: number = 0; i < text.length; i++) {
        if (i < foundIndex || i >= foundIndex + search.length) {
            finalResult += text[i]
        }
    }
} else {
    // jika tidak ditemukan hasilnya tetap string aslinya
    finalResult = text
}

console.log('result : ', finalResult)