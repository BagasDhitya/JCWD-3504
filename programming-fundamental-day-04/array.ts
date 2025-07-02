// -- ARRAY

// -- definisi menggunakan array biasa
const fruits: string[] = ["apple", "banana", "orange"]
const temperature: number[] = [30, 31, 5, 29, 28]
const attendance: boolean[] = [true, true, false, true]

console.log('access apple from fruits : ', fruits[0])
console.log('access 29 from temperature : ', temperature[3])
console.log('access 28 from temperature without direct index : ', temperature[temperature.length - 1])
console.log('access 5 from temperature without direct index : ', temperature[Math.floor(temperature.length / 2)])

// -- definisi menggunakan array generik
const familyMembers: Array<string | number> = ['Father', 'Mother', 'Sister', 1959, 1970, 1991]

// -- multiple array
const collectionOfDevice: [string[], string[]] = [['Samsung', 'Galaxy'], ['Oppo', 'Reno']]

console.log(" ---------------------------------------------- ")
console.log("access 'Galaxy' from collectionOfDevice : ", collectionOfDevice[0][1])

console.log(" ---------------------------------------------- ")

// -- Built in method array
let student: string[] = ["John Doe", "Jane Doe", "Bob", "Tom"]

student.push("Budi") // push untuk menambahkan elemen dari index paling belakang
console.log('After push from student : ', student)

student.unshift("Joko") // unshift untuk menambahkan elemen dari index paling depan
console.log('After unshift from student : ', student)

student.pop() // pop untuk menghapus elemen dari index paling belakang
console.log('After pop from student : ', student)

student.shift() // shift untuk menghapus elemen dari index paling depan
console.log('After shift from student : ', student)

const hasBob = student.includes("Joko") // includes untuk mencari ketersediaan elemen di dalam array
console.log(hasBob)

const scoring: number[] = [75, 75, 80, 95, 60, 65, 40, 100, 70, 65, 65, 60]
const result: number[] = scoring.filter((score) => score > 75) // untuk menyaring dengan kondisi tertentu
console.log('Score > 75 : ', result)

const sortingResult: number[] = scoring.sort((x, y) => x - y) // sorting dengan ascending (kecil ke besar)
console.log('Sorting scoring : ', sortingResult)

console.log(" ---------------------------------------------- ")

// -- FOR OF LOOP
// -- perulangan untuk mengambil langsung isi dari index

const phoneType: string[] = ['Samsung', 'Infinix', 'Realme', 'Pocophone', 'Apple']
for (const type of phoneType) { // type itu hanya variabel, bisa diganti dengan nama lain
    console.log(type)
}

console.log(" ---------------------------------------------- ")
let resultScore: number = 0
for (const score of scoring) {
    resultScore += score
}
console.log('Total score : ', resultScore) // menghitung total dari variabel scoring diatas

console.log(" ---------------------------------------------- ")
// -- FOR IN LOOP
// -- perulangan untuk mengambil index

for (const index in phoneType) {
    console.log(`Index ${index} : ${phoneType[index]}`)
}