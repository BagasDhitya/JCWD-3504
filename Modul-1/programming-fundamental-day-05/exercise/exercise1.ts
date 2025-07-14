
function getStats(arr: number[]) {
    let lowest: number = arr[0]
    let highest: number = arr[0]
    let total: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        let current: number = arr[i] // untuk menampung setiap elemen yang dilooping
        console.log("current : ", current)

        // mencari nilai terendah
        if (current < lowest) {
            lowest = current
        }

        // mencari nilai tertinggi
        if (current > highest) {
            highest = current
        }

        // jumlahkan semua elemen
        total = total + current
    }

    let average: number = total / arr.length

    return {
        lowest: lowest,
        highest: highest,
        average: average
    }
}

let arr: number[] = [12, 5, 23, 18, 4, 45, 32]
console.log(getStats(arr))