type NumberList = {
    key: number,
    count: number
}

function findSingleNumber(nums: number[]) {
    let numberList: NumberList[] = [] // buat array untuk menyimpan angka unik dan jumlah kemunculannya

    for (let i: number = 0; i < nums.length; i++) {
        let found: boolean = false // cek apakah angka sudah ada di numberList

        for (let j = 0; j < numberList.length; j++) {
            if (numberList[j].key === nums[i]) {
                numberList[j].count++ // jika ketemu tambah jumlah
                found = true
            }
        }

        // jika belum ada, tambahkan angka ke array
        if (!found) {
            numberList.push({ key: nums[i], count: 1 })
        }
    }

    // cari angka yang countnya hanya 1
    for (let k: number = 0; k < numberList.length; k++) {
        if (numberList[k].count === 1) {
            return numberList[k].key
        }
    }

    // jika tidak ditemukan
    return -1
}

console.log(findSingleNumber([2, 2, 1])) // output : 1
console.log(findSingleNumber([4, 1, 2, 1, 2])) // output : 4
console.log(findSingleNumber([1])) // output : 1

