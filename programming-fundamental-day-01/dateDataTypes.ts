let currentDate: Date = new Date()
let specificDate: Date = new Date('2025-06-25T00:00:00')

// console.log('current date : ', currentDate)
// console.log('specific date : ', specificDate)

// date built in method
let today: Date = new Date()

// 1. getFullYear()
console.log("Year : ", today.getFullYear())

// 2. getMonth()
console.log("Month : ", today.getMonth() + 1) //  ditambahkan 1 supaya menjadi actual month, bukan dihitung dari 0

// 3. toLocaleDateString()
console.log("Locale Date : ", today.toLocaleDateString())