
function createTrianglePattern(height: number): void {

    // looping dari baris ke 1 sampai ke baris height
    for (let row: number = 1; row <= height; row++) {
        let line: string = "" // variabel untuk menyimpan isi tiap baris

        // loop dari angka 1 sampai angka row untuk setiap baris
        for (let num: number = 1; num <= row; num++) {
            line = line + num // tambahkan angka ke dalam line

            // jika bukan angka terakhir di baris ini, tambahkan spasi
            if (num !== row) {
                line = line + " "
            }
        }
        console.log(line)
    }
}

createTrianglePattern(5)