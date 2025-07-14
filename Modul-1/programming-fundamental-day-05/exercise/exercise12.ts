// pseudo code
// - buat array untuk menyimpan nilai yang sudah dihitung
// - loop setiap eleemen:
// -- hitung berapa kali elemen itu muncul
// -- jika lebih dari 1 kali, dan belum pernah dihitung, tambahkan ke total
// - return total

// solusi
function sumDuplicateValues(arr: number[]) {
    let total: number = 0
    let checked: number[] = []

    for (let i: number = 0; i < arr.length; i++) {
        let current: number = arr[i]
        let count: number = 0
        let alreadyChecked: boolean = false

        // cek apakah current sudah diperiksa sebelumnya
        for (let j: number = 0; j < checked.length; j++) {
            if (checked[j] === current) {
                alreadyChecked = true
            }
        }

        // hitung berapa kali current muncul
        for (let k: number = 0; k < arr.length; k++) {
            if (arr[k] === current) {
                count++
            }
        }

        // jika muncul lebih dari 1 kali, tambahkan ke total
        if (count > 1) {
            total = total + current
            checked[checked.length] = current // tandai sudah dihitung
        }
    }

    return total
}

const arrayValues: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10]
console.log(sumDuplicateValues(arrayValues))