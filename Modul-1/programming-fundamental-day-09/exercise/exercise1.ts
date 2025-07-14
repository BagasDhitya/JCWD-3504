function excelColumnToNumber(column: string) {
    let result: number = 0

    // ulangi setiap karakter dalam string dari kiri ke kanan
    for (let i: number = 0; i < column.length; i++) {
        let char: string = column[i] // untuk menyimpan karakter

        // konversi huruf menjadi angka 1-26
        // 'A' itu memiliki kode ASCII 65, maka A = 1 bisa didapat dari (ASCII - 64)
        let charValue: number = char.charCodeAt(0) - 64

        // hitung posisi dengan sistem basis 26
        // contoh : "AB" => (1 * 26) + 2 = 28
        result = result * 26 + charValue
    }

    return result
}

console.log(excelColumnToNumber("A")) // 1
console.log(excelColumnToNumber("Z")) // 26
console.log(excelColumnToNumber("AA")) // 27
console.log(excelColumnToNumber("AB")) // 28
