function factorialNumber(n: number): number {

    // base case : faktorial dari 0 atau 1 adalah 1
    if (n === 0 || n === 1) {
        return 1
    }

    // proses rekursif: n! = n * (n - 1)!
    // 5! = 5 * (5 - 1)
    // 4 = 4 * (4 - 1)
    // 3 = 3 * (3 - 1)
    // 2 = 2 * (2 - 1)
    return n * factorialNumber(n - 1)
}

// fungsi tambahan untuk menampilkan proses faktorial dalam bentuk string
function factorialSteps(n: number): string {
    let steps: string = ""
    for (let i: number = n; i >= 1; i--) {
        steps += i
        if (i > 1) {
            steps += " x "
        }
    }
    return `${n}! = ${steps} = ${factorialNumber(n)}`
}

console.log(factorialSteps(5))