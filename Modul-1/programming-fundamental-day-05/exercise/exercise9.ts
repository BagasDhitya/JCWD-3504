// pseudo code
// - buat array kosong untuk result
// - loop i dari 0 ke n
// -- hitung berapa kali arr[i] muncul
// -- jika muncul lebih dari 1 dan belum ada di result, tambahkan ke result
// - return result

// solusi
function findDuplicates(arr: number[]) {
    let result: number[] = [] // untuk nampung hasil akhir

    for (let i: number = 0; i < arr.length; i++) {
        let count: number = 0 // untuk menghitung jumlah kemunculan elemen
        let isAlreadyInResult: boolean = false // untuk menandakan apakah sudah ada di result atau belum

        // hitung jumlah kemunculan elemennya
        for (let j: number = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
                console.log("count : ", count)
            }
        }

        // cek apakah sudah ditambahkan ke result
        for (let k: number = 0; k < result.length; k++) {
            if (arr[i] === result[k]) {
                isAlreadyInResult = true
            }
        }

        // cek apakah kemunculan elemen lebih dari 1
        if (count > 1 && !isAlreadyInResult) {
            result[result.length] = arr[i]
        }
    }

    return result
}

const arr: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5]
console.log(findDuplicates(arr))