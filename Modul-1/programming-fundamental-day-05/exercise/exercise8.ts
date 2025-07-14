// pseudo code
// - buat array kosong untuk result
// - loop arr1, tambahkan ke result
// - loop arr2, tambahkan ke result
// - return result

// solusi mudah :
function mergedArraysWithSpread(arr1: number[], arr2: number[]) {
    let result: number[] = [...arr1, ...arr2]
    return result
}

const arr1: number[] = [1, 2, 3]
const arr2: number[] = [4, 5, 6]
// console.log(mergedArrays(arr1, arr2))

// solusi lain :
function mergedArraysWithoutSpread(arr1: number[], arr2: number[]) {
    let result: number[] = [] // untuk nampung hasil gabungan arr1 dan arr2

    // loop isi dari arr1
    for (let i: number = 0; i < arr1.length; i++) {
        result[result.length] = arr1[i] // masukkan ke dalam result
    }

    // loop isi dari arr2
    for (let j: number = 0; j < arr2.length; j++) {
        result[result.length] = arr2[j]
    }

    return result
}

console.log(mergedArraysWithoutSpread(arr1, arr2))