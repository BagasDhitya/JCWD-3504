
function removeOddNumbers(input: number[]) {
    const evenNumbers: number[] = [] // untuk menampung angka genap

    // loop melalui setiap elemen array input
    for (let i: number = 0; i < input.length; i++) {
        const current: number = input[i]

        // cek apakah angka genap (habis dibagi 2)
        if (current % 2 == 0) {
            // masukkan angka genap ke array hasil
            evenNumbers[evenNumbers.length] = current
        }
    }

    return evenNumbers
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))