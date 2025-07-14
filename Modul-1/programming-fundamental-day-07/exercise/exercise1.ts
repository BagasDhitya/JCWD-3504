// tipe data student
type Student = {
    name: string,
    email: string
}

function mergeUniqueStudents(arr1: Student[], arr2: Student[]) {

    let combined: Student[] = [] // menampung hasil gabungan arr1 dan arr2

    // menyalin data dari array pertama ke combined
    for (let i: number = 0; i < arr1.length; i++) {
        combined.push(arr1[i])
    }

    // menyalin data dari array kedua ke combined
    for (let j: number = 0; j < arr2.length; j++) {
        combined.push(arr2[j])
    }

    let result: Student[] = [] // untuk menyimpan hasil akhir yang sudah tidak duplikat

    // proses menghapus duplikat berdasarkan email
    for (let i: number = 0; i < combined.length; i++) {
        let isDuplicate: boolean = false // variabel untuk penanda apakah duplikat atau tidaknya

        // looping untuk mengecek apakah email dari student saat ini sudah ada di result
        for (let j: number = 0; j < result.length; j++) {
            if (combined[i].email === result[j].email) {
                isDuplicate = true // jika ditemukan duplikasi, update isDuplicate
            }
        }

        // jika bukan duplikat, tambahkan ke array result
        if (!isDuplicate) {
            result.push(combined[i])
        }
    }

    return result
}

const arr1: Student[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" }
]

const arr2: Student[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
]

const merged = mergeUniqueStudents(arr1, arr2)

console.log("Hasil gabungan tanpa duplikat : ")
for (let i: number = 0; i < merged.length; i++) {
    console.log(merged[i])
}