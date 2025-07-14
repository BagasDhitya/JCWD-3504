// Kelas Product untuk menyimpan data product
class Product {
    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}

// tipe data untuk menyimpan produk + jumlah di transaksi
type TransactionItem = {
    product: Product,
    quantity: number
}

// Kelas Transaction untuk mengelola proses transaksi
class Transaction {
    private items: TransactionItem[] // array produk dalam keranjang
    private total: number // total harga saat ini

    constructor() {
        this.items = []
        this.total = 0
    }

    // fungsi/method untuk menambahkan produk ke dalam keranjang
    public addToCart(product: Product, quantity: number) {
        const item: TransactionItem = {
            product: product,
            quantity: quantity
        }

        this.items.push(item) // menambahkan item ke array

        // hitung total baru
        this.total = this.total + (product.price * quantity)
    }

    // fungsi/method untuk menampilkan total harga saat ini
    public showTotal() {
        return this.total
    }

    // finalisasi transaksi dan kembalikan semua data produk + total
    public checkout() {
        return {
            items: this.items,
            total: this.total
        }
    }
}

const product1 = new Product('Apple', 3000) // 3000 per buah
const product2 = new Product('Banana', 2000) // 2000 per buah
const product3 = new Product('Milk', 5000) // 5000 per botol

const transaction = new Transaction()

transaction.addToCart(product1, 4) // 4 buah apple x 3000 = Rp12000
transaction.addToCart(product2, 6) // 6 buah pisang x 2000 = Rp12000
transaction.addToCart(product3, 1) // 1 susu x 5000 = Rp5000

console.log("Total saat ini : ", transaction.showTotal())

const res = transaction.checkout()
console.log("Transaksi Final : ")
for (let i: number = 0; i < res.items.length; i++) {
    const item = res.items[i]

    console.log(`- ${item.product.name} x ${item.quantity} = ${item.product.price * item.quantity}`)
}
console.log("Total bayar : ", res.total)