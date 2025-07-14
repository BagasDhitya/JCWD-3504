
let mainText: string = "Hello world" // string utama
let searchText: string = "ell" // substring yang dicari

let output: string = "" // untuk menampung hasil akhir setelah substring dipotong
let found: boolean = false // untuk menandakan bagian mana yang cocok sesuai dengan hasil search
let a: number = 0

while (a < mainText.length) {
    let match: boolean = true
    let b: number = 0

    // cek apakah substring cocok
    while (b < searchText.length && a + b < mainText.length) {
        if (mainText[a + b] !== searchText[b]) {
            match = false
        }
        b = b + 1
    }

    // jika cocok dan belum pernah dihapus sebelumnya
    if (match && !found) {
        a = a + searchText.length // skip substring
        found = true
    } else {
        output = output + mainText[a] // tambahkan karakter ke hasil
        a = a + 1
    }
}

console.log(output)