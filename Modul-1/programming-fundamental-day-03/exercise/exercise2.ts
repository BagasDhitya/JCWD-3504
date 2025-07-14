

function isPalindrome(word: string): string {
    let cleanWord: string = word.toLowerCase() // ubah huruf menjadi huruf kecil agar tidak terpengaruh huruf kapital
    let reversed: string = "" // buat versi kata yang dibalik

    // loop dari belakang ke depan untuk membalik kata
    for (let i: number = cleanWord.length - 1; i >= 0; i--) {
        reversed += cleanWord[i] // hasil terbaliknya disimpan ke reversed
    }

    return cleanWord === reversed ? "Palindrome" : "Not Palindrome"
}

const test: string = "madam"
console.log(isPalindrome(test))