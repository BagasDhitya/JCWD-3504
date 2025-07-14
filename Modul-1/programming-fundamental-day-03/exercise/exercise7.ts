
let input: string = "The QuiCk BrOwN Fox" // input string
let swapped: string = ""
let idx: number = 0

while (idx < input.length) {
    let code: number = input.charCodeAt(idx) // ambil kode ASCII karakter
    let ch: string = input[idx]

    if (code >= 65 && code <= 90) {
        // huruf besar -> kecil
        swapped = swapped + String.fromCharCode(code + 32)
    } else if (code >= 97 && code <= 122) {
        // huruf kecil -> besar
        swapped = swapped + String.fromCharCode(code - 32)
    } else {
        // karakter lain tetap
        swapped = swapped + ch
    }
    idx = idx + 1
}

console.log(swapped)