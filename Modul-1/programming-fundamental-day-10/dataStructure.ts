// -- STACK -> konsep struktur data yang berbasis LIFO (Last in First out)

// case : tumpukan piring
class PlateStack {
    private plates: string[] = []

    public addPlate(plate: string) {
        // -- jika menggunakan built in push
        // this.plates.push(plate) // tambahkan piring ke atas tumpukan

        // -- jika tanpa built in push
        this.plates[this.plates.length] = plate
    }

    public removePlate() {
        // -- jika menggunakan built in pop
        // return this.plates.pop() // ambil piring paling atas

        // -- jika tanpa built in pop
        if (this.plates.length === 0) {
            return undefined
        }
        // Mengambil plate terakhir
        const lastPlate = this.plates[this.plates.length - 1]
        // Mengurangi panjang array (menghapus elemen terakhir)
        this.plates.length = this.plates.length - 1
        return lastPlate
    }

    public peek() {
        return this.plates[this.plates.length - 1] // untuk melihat piring paling atas setelah diremove
    }

    public viewPlates() {
        return this.plates
    }
}

const plateStack = new PlateStack()
plateStack.addPlate("Piring A")
plateStack.addPlate("Piring B")
plateStack.addPlate("Piring C")
plateStack.addPlate("Piring D")

// console.log("Piring paling atas : ", plateStack.peek())
// plateStack.removePlate()
// console.log("Setelah tumpukan piring berkurang : ", plateStack.peek())
// plateStack.addPlate("Piring E")
// console.log("Setelah tumpukan piring ditambah : ", plateStack.peek())
// console.log("Semua piring : ", plateStack.viewPlates())

// case : text editor
class TextEditor {
    private history: string[] = []
    private current: string = ""

    public type(text: string) {
        this.history.push(this.current) // simpan sebelum mengubah
        this.current = text
    }

    public undo() {
        if (this.history.length) {

            if (this.history.length === 0) {
                return undefined
            }

            this.current = this.history[this.history.length - 1]
            this.history.length = this.history.length - 1
            return this.current
        }
    }

    public getText() {
        return this.current
    }
}

const editor = new TextEditor()
// editor.type("Hello")
// editor.type("Hello World")
// editor.type("Hello World Typescript")
// console.log(editor.getText())
// editor.undo()
// console.log(editor.getText())
// editor.undo()
// console.log(editor.getText())
// editor.undo()
// console.log(editor.getText())

// -- QUEUE -> konsep struktur data yang berbasis FIFO (First in First out)
// case : antrian tiket bioskop
class TicketQueue {
    private queue: string[] = []

    public enter(name: string) {
        // -- jika menggunakan push built in
        // this.queue.push(name) // masuk ke dalam antrian

        // -- jika tanpa push built in
        this.queue[this.queue.length] = name
    }

    public call() {
        // -- jika menggunakan shift built in
        // return this.queue.shift() // panggil dari depan antrian

        // -- jika tanpa shift built in
        if (this.queue.length === 0) {
            return "Tidak ada antrian lagi ..."
        }

        // Simpan elemen pertama yang akan dikeluarkan
        const firstInQueue = this.queue[0]

        // Geser semua elemen ke kiri
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue[i] = this.queue[i + 1]
        }

        // Kurangi panjang array
        this.queue.length = this.queue.length - 1
        return firstInQueue
    }

    public view() {
        return this.queue // melihat antrian saat ini
    }
}

const loket = new TicketQueue()
loket.enter("Budi")
loket.enter("Joko")
// console.log(loket.call())
// console.log(loket.call())
// console.log(loket.call()) // tidak ada antrian lagi

// -- SET -> sebuah object yang tidak menerima duplicate values
// case : daftar nomor telepon

const phoneNumbers = new Set<string>()
phoneNumbers.add("08123456789")
phoneNumbers.add("08123456789") // duplikat, tidak akan ditambahkan
phoneNumbers.add("08234567890")
phoneNumbers.add("08334455667")

// add -> menambahkan values ke dalam Set
// delete -> menghapus values dari dalam Set
// size -> mengecek banyaknya isi dari Set (seperti length di array)

// console.log(phoneNumbers)
// console.log("Cek apakah ada nomor telepon 08234567890 : ", phoneNumbers.has("08234567890")) // mencari nomor telepon di dalam Set
phoneNumbers.delete("08334455667")
// console.log("Setelah dihapus 083344556677 dari daftar : ", phoneNumbers)
// console.log("Size : ", phoneNumbers.size)

const listPhoneNumbers: Array<string> = [...phoneNumbers]
// console.log("Converted to array : ", listPhoneNumbers)

// -- HASH TABLE
// case : daftar nomor telepon beserta namanya
type Contact = {
    [name: string]: string
}

const contact: Contact = {
    "Rina": "08123456",
    "Budi": "08976543",
    "Joko": "08877664"
}

// cari nomor telepon Joko
console.log(contact["Joko"])

// menambahkan kontak baru bernama Dewi
contact["Dewi"] = "08134556"
console.log("Daftar kontak setelah ditambahkan Dewi : ", contact)

// mengupdate nomor baru Budi
contact["Budi"] = "089988775"
console.log("Daftar kontak setelah nomor Budi diupdate : ", contact)

// menghapus kontak Rina
delete contact["Rina"]
console.log("Daftar kontak setelah Rina dihapus : ", contact)

// cek apakah ada kontak bernama Joko
console.log("Joko" in contact)