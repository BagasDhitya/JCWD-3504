
function splitToWords(text: string): string[] {
    const words: string[] = [] // untuk nampung hasil kata
    let currentWord: string = "" // penampungan sementara untuk membangun kata

    // loop tiap karakter dalam string
    for (let i: number = 0; i < text.length; i++) {
        const char: string = text[i]

        // jika karakter bukan spasi, tambahkan ke currentWord
        if (char !== " ") {
            currentWord = currentWord + char
        } else {
            // jika karakter adalah spasi dan currentWord tidak kosong
            if (currentWord !== "") {
                words[words.length] = currentWord // simpan kata ke dalam array
                currentWord = "" // reset untuk nampung kata berikutnya
            }
        }
    }

    // masukkan kata terakhir jika ada (karena setelah kata terakhir bisa saja tidak ada spasi)
    if (currentWord !== "") {
        words[words.length] = currentWord
    }

    return words // kembalikan array kata
}

console.log(splitToWords("Hello World"))
