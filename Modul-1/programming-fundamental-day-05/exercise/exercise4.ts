// pseudo code:

// buat array kosong result
// loop dengan index dari 0 sampai panjang array
// - tambahkan elemen dari array1 dan array2
// - simpan hasil ke result
// return result

// solusi :
function sumArrays(arr1: number[], arr2: number[]) {
    let result: number[] = [] //untuk nampung hasil dari result penjumlahan

    for (let i = 0; i < arr1.length; i++) {
        result[i] = arr1[i] + arr2[i] // jumlahkan elemen di posisi yang sama
    }

    return result
}

let arr1 = [1, 2, 3]
let arr2 = [3, 2, 1]
console.log(sumArrays(arr1, arr2))