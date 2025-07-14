// -- Big O Notation

// Time Complexity - Linear Time (O(n))
// contoh : menjumlahkan harga belanjaan harian dari daftar barang
function calculationPrice(prices: number[]) {
    let total: number = 0
    for (let i: number = 0; i < prices.length; i++) {
        total += prices[i]
    }
    return total
}

const prices: number[] = [10000, 25000, 15000, 30000]
// console.time("calculationPrice")
// console.log(calculationPrice(prices))
// console.timeEnd("calculationPrice")

// -- waktu berjalan sebanyak n kali tergantung jumlah item belanjaan
// -- O(n) karena perulangan terjadi satu per satu sesuai jumlah elemen

// Time Complexity - Quadratic Time (O(n^2))
// contoh : mengecek duplikasi dalam list teman
function hasDuplicateFriendship(names: string[]) {
    for (let i: number = 0; i < names.length; i++) {
        console.log("-- index i ke " + i + " adalah " + names[i])
        for (let j: number = i + 1; j < names.length; j++) {
            console.log("---- sub index j ke " + j + " adalah " + names[j])
            if (names[i] === names[j]) {
                return true
            }
        }
    }
    return false
}

const friendship: string[] = ["Bob", "John Doe", "Jane Doe", "Bob"]
// console.time("hasDuplicateFriendship")
// console.log(hasDuplicateFriendship(friendship))
// console.timeEnd("hasDuplicateFriendship")

// ada dua loop bersarang(nesting), sehingga kita membandingkan dua looping untuk menemukan duplikasi (O(n^2))

// Space Complexity - Linear Space (O(n))
// case : menyimpan semua nota transaksi harian ke dalam array
type Receipt = {
    id: number
    price: number
}

function storeReceipts(receipt: Receipt[]) {
    const stored: Receipt[] = []
    for (let i: number = 0; i < receipt.length; i++) {
        stored.push({
            id: receipt[i].id,
            price: receipt[i].price
        })
        console.log("store : ", stored)
    }
    return stored
}

const receipt: Receipt[] = [
    { id: 1, price: 15000 },
    { id: 2, price: 25000 },
    { id: 3, price: 40000 }
]
// console.log(storeReceipts(receipt)) // output berupa array baru sebesar n, alokasi memori baru sebesar (O(n))

// Space Complexity - Constant Space (O(1))
// case : menghitung total berat barang tanpa menyimpan masing masing barangnya
function calculateWeight(weights: number[]) {
    let total: number = 0
    for (let i: number = 0; i < weights.length; i++) {
        total += weights[i]
        // console.log('total : ', total)
    }
    return total
}

const weights: number[] = [2.5, 1.2, 3.0, 4.0, 5.5]
// console.log(calculateWeight(weights))
// tidak menyimpan data tambahan selain variabel total
// space tetap walaupun data input bertambah -> (O(1))