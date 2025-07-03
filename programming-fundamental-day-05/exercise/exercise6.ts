// pseudo code :
// buat variabel total = 0
// loop semua elemen dalam array
// - jika tipe datanya number, tambahkan ke total
// return total

// solusi :
function sumNumbersOnly(arr: any[]) {
    let total: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        // cek apakah tipe datanya 'number'
        if (typeof arr[i] === 'number') {
            total = total + arr[i]
        }
    }
    return total
}

let mixedArray: any[] = ["3", 1, "string", null, false, undefined, 2]
console.log(sumNumbersOnly(mixedArray))