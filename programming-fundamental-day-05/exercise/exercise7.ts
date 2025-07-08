// pseudo code

// - buat array kosong result
// - looping semua parameter angka
// -- jika result length < maxSize, tambahkan angka ke array
// -- return result

// solusi
function insertLimited(maxSize: number, ...numbers: number[]) {
    let result: number[] = [] // untuk menampung hasil

    for (let i: number = 0; i < numbers.length; i++) {
        if (result.length < maxSize) {
            console.log("index : ", numbers[i])
            // result.push(numbers[i]) // jika result length < maxSize, tambahkan angka ke array
            result[result.length] = numbers[i] // cara lain selain menggunakan push
        }
    }

    return result
}

// console.log(insertLimited(5, 5, 10, 24, 3, 6, 7, 8))

// -- review nested looping
function getNestedLoop(arr: number[]) {
    for (let i: number = 0; i < arr.length; i++) {
        // console.log("index : ", i)
        console.log(" ------ isi dari index " + i + " : " + arr[i])
        for (let j: number = 0; j < arr.length; j++) {
            console.log(" ---------------- isi dari sub index " + j + " : " + arr[j])
        }
    }
}

// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// getNestedLoop(arr)

// -- case : menampilkan daftar kelas dan nama murid
// kita punya beberapa kelas dan setiap kelas berisi beberapa murid
// goals -> tampilkan semua nama murid per kelas

// pseudo code
// - buat array 2 dimensi : kelas berisi array murid
// - loop untuk setiap kelas (loop luar)
// -- tampilkan dulu nama kelasnya (misal "Kelas A")
// -- loop untuk setiap murid dalam kelas tersebut (loop dalam)
// --- tampilkan nama murid

// solusi
function displayClassStudents(classes: Array<string[]>) {
    // loop untuk setiap kelas
    for (let i: number = 0; i < classes.length; i++) {
        console.log("Kelas " + String.fromCharCode(65 + i) + ":")
        for (let j: number = 0; j < classes[i].length; j++) {
            console.log("- " + classes[i][j])
        }
        console.log("")
    }
}

const classes: Array<string[]> = [
    ["Ani", "Budi", "Citra"], // Kelas A
    ["Dewi", "Eko"], // Kelas B
    ["Fajar", "Gita", "Hana", "Indra"] // Kelas C
]
displayClassStudents(classes)