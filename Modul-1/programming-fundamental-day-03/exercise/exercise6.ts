
let sentence: string = "hello world" // nampung kalimat utama
let res: string = "" // nampung hasil akhir
let pos: number = 0
let isStartOfWord: boolean = true // memberikan flagging/menandai apakah karakter saat ini adalah awal kata

while (pos < sentence.length) {
    let ch: string = sentence[pos] // ambil karakter saat ini

    if (ch === " ") {
        res = res + ch // jika ada spasi, langsung tambahkan
        isStartOfWord = true // karakter berikutnya adalah awal kata
    } else {
        let code: number = sentence.charCodeAt(pos) // ambil kode ascii

        // jika awal kata dan huruf kecil
        if (isStartOfWord && code >= 97 && code <= 122) {
            code = code - 32 // ubah ke huruf kapital (ASCII)
        }

        res = res + String.fromCharCode(code) // tambahkan ke hasil
        isStartOfWord = false // karakter selanjutnya bukan awal kata lagi
    }

    pos = pos + 1
}

console.log(res)