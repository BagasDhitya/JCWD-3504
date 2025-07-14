function climbStairs(n: number) {
    // kasus dasar: 0 atau 1 langkah
    if (n === 0) return 0
    if (n === 1) return 1
    if (n === 2) return 2

    // variabel untuk menyimpan jumlah cara ke dua step sebelumnya
    let prev1: number = 2 // cara untuk melangkah step n - 1
    let prev2: number = 1 // cara untuk melangkah step n - 2
    let current: number = 0

    // perulangan/iterasi dari step 3 sampai n
    for (let i: number = 3; i <= n; i++) {
        current = prev1 + prev2 // cara baru = cara dari n - 1 + n - 2
        prev2 = prev1 // geser prev2 jadi prev1
        prev1 = current // current jadi prev1 untuk perulangan berikutnya
    }

    return current
}

console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(5)) // 8