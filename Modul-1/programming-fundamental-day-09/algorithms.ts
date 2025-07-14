// Brute Force -> mencari segala kemungkinan
// case 1 : menemukan selisih terkecil di dalam suatu array (tanpa optimasi, tidak membutuhkan array tambahan)
function smallestDifference(arrNumber: number[]) {
    let minDiff: number = Infinity
    for (let i: number = 0; i < arrNumber.length; i++) {
        for (let j: number = i + 1; j < arrNumber.length; j++) {
            const diff: number = Math.abs(arrNumber[i] - arrNumber[j])
            if (diff < minDiff) {
                minDiff = diff
            }
        }
    }
    return minDiff
}

const arrNumber: number[] = [30, 25, 40, 33]
// console.log(smallestDifference(arrNumber))

// case 2 : menyimpan index pasangan bilangan di dalam array yang jumlahnya sama dengan target (dengan optimasi, membutuhkan array tambahan)
function findAllPairs(prices: number[], target: number) {
    const result: [number, number][] = [] // untuk menampung pasangan elemen yang membentuk target

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] + prices[j] === target) {
                result.push([prices[i], prices[j]])
                // [[10, 20], [15,15], [5,25]]
            }
        }
    }
    return result
}

const pairNumbers: number[] = [10, 20, 15, 15, 5, 25]
const target: number = 30
// console.log(findAllPairs(pairNumbers, target))

// -- Linear Search 
// case : mencari nama di daftar tamu, jika ketemu cetak "Found", kalau tidak ketemu cetak "Not Found"
function linearSearch(guests: string[], target: string): string {
    for (let i: number = 0; i < guests.length; i++) {
        if (guests[i] === target) {
            return "Found"
        }
    }
    return "Not Found"
}

const guests: string[] = ["Andi", "Budi", "Ana"]
const targetGuest: string = "Budi"
// console.log(linearSearch(guests, targetGuest))

// -- Binary Search (data harus terurut)
// case : mencari harga dalam daftar produk
function binarySearch(sortedPrices: number[], target: number) {
    let left: number = 0
    let right: number = sortedPrices.length - 1

    while (left <= right) {
        const middle: number = Math.floor((left + right) / 2)

        if (sortedPrices[middle] === target) {
            return middle
        } else if (sortedPrices[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    return -1
}

const sortedPrices: number[] = [5000, 10000, 12000, 15000, 20000, 25000]
const targetPrice: number = 20000
console.log(binarySearch(sortedPrices, targetPrice))