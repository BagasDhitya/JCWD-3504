function isAnagram(s: string, t: string) {
    // jika panjangnya beda, pasti bukan anagram
    if (s.length !== t.length) {
        return false
    }

    // buat array ukuran 26 untuk alfabet a-z, semua diisi 0
    let counter: number[] = []
    for (let i: number = 0; i < 26; i++) {
        counter[i] = 0
    }

    // hitung jumlah huruf di s
    for (let i: number = 0; i < s.length; i++) {
        let index: number = s.charCodeAt(i) - 97 // 'a' = 97
        counter[index]++
    }

    // kurangi jumlah huruf berdasarkan t
    for (let i: number = 0; i < t.length; i++) {
        let index: number = t.charCodeAt(i) - 97
        counter[index]--
    }

    // cek apakah semua jumlah kembali ke 0
    for (let i: number = 0; i < 26; i++) {
        if (counter[i] !== 0) {
            return false
        }
    }

    return true
}

console.log(isAnagram("anagram", "nagaram")) // output : true
console.log(isAnagram("rat", "car")) // output : false