// IF STATEMENT

// case 1 : mengecek apakah cuaca hari ini cerah
let isSunny: boolean = true
if (isSunny) {
    console.log("Let's hang the laundry outside")
}

// case 2 : mengecek apakah ada stok telur
let eggsInFridge = 0
if (eggsInFridge == 0) {
    console.log("Buy eggs from the store")
}

// LOGICAL OPERATOR

// && (AND)
// false + false = false
// false + true = false
// true + false = false
// true + true = true

// || (OR)
// false + false = false
// false + true = true
// true + false = true
// true + true = true

// ! (NOT)
// false = true
// true = false

// case 3 : mengecek apakah waktu sudah sore untuk menyiram tanaman
let currentHour: number = 17

if (currentHour >= 16 && currentHour <= 18) {
    console.log("It's the right time to water the plants")
}

// case 4 : mengecek apakah kita bisa nonton bioskop malam
let personAge: number = 22
let hasMoney: boolean = true
let hasID: boolean = true

if (personAge >= 21 && hasMoney && hasID) {
    console.log("You can watch the late-night movie")
}

// case 5 : mengecek apakah komputer siap digunakan
let battery: number = 90
let isPluggedIn: boolean = true
let systemUpdated: boolean = false

if ((battery >= 50 || isPluggedIn) && systemUpdated) {
    console.log("Laptop is ready to use")
}

// ELSE STATEMENT
// case 1 : kalau hari ini hujan, maka bawa payung, jika tidak maka tidak perlu membawa payung

let isRainy: boolean = false
if (isRainy) {
    console.log("Bring an umbrella")
} else {
    console.log("No umbrella needed today")
}

// case 2 : kalau bikin teh pakai gula, berarti jadi teh manis, kalau tidak maka jadi teh tawar

let hasSugar: boolean = true
if (!hasSugar) {
    console.log("Make plain tea")
} else {
    console.log("Make sweet tea")
}

// case 3 : apakah kita bisa membeli suatu barang?

let balance: number = 100
let itemPrice: number = 120

if (balance >= itemPrice) {
    console.log("You can buy the item")
} else {
    console.log("Not enough balance. Consider saving more.")
}

// case 4 : apakah kita bisa bepergian ke luar negeri?

let hasPassport: boolean = true
let hasVisa: boolean = false
let hasDeposito: boolean = true

if (hasPassport && hasVisa || hasDeposito) {
    console.log("Ready for international travel.")
} else {
    console.log("Complete your documents first.")
}

// ELSE IF STATEMENT

// case 1 : cek suhu badan

let temperature: number = 20

if (temperature > 35) {
    console.log("It's very hot!")
} else if (temperature > 25) {
    console.log("It's warm")
} else {
    console.log("Normal")
}

// case 2 : memberikan kategori nilai

let score: number = 85

if (score >= 90) {
    console.log("Grade A")
} else if (score >= 75) {
    console.log("Grade B")
} else {
    console.log("Grade C or below")
}

// case 3 : menentukan waktu

let hour: number = 22

if (hour >= 5 && hour < 12) {
    console.log("Good Morning")
} else if (hour >= 12 && hour < 17) {
    console.log("Good Afternoon")
} else if (hour >= 17 && hour < 21) {
    console.log("Good Evening")
} else {
    console.log("Good Night")
}

// case 4 : masuk ke bioskop

// seseorang hanya boleh masuk ke bioskop malam jika :
// - berusia >= 18 tahun dan membawa kartu identitas, atau
// - sudah punya tiket online
// - tetapi, tidak boleh masuk jika dalam keadaan sakit

let visitorAge: number = 20
let hasIDCard: boolean = true
let hasOnlineTicket: boolean = false;
let isSick: boolean = false;

if ((visitorAge >= 18 && hasIDCard) || hasOnlineTicket) {
    if (!isSick) {
        console.log("You may enter the cinema.")
    } else {
        console.log("You are not allowed to enter while sick.")
    }
} else if (!hasIDCard && visitorAge >= 18) {
    console.log("You need to bring your ID Card.")
} else {
    console.log("You are not eligible to enter the cinema.")
}

// -- SWITCH CASE STATEMENT
// case 1 : menentukan hari dalam 1 minggu

// let day: string = "Tuesday" -> Just another day
// let day: string = "Friday" -> Almost weekend
let day: string = "Monday"

switch (day) {
    case "Monday":
        console.log("Start of the week.")
        break;
    case "Friday":
        console.log("Almost weekend!")
        break;
    default:
        console.log("Just another day")
}

// case 2 : undian berhadiah

let probability: number = Math.floor(Math.random() * 10)

switch (probability) {
    case 5:
        console.log("Selamat kamu mendapatkan undian berhadiah level 5")
        break;
    case 4:
        console.log("Selamat kamu mendapatkan undian berhadiah level 4")
        break;
    default:
        console.log("Kamu kurang beruntung")
}

// case 3 : menentukan biaya pengiriman paket

// ada 3 jenis layanan pengiriman : regular, express, dan same-day

// berat <= 1 kg
// --- regular : Rp10.000
// --- express : Rp15.000
// --- same-day : Rp20.000

// 1 kg < berat <= 5kg
// --- regular : Rp20.000
// --- express : Rp30.000
// --- same-day : Rp40.000

// berat > 5kg
// --- regular : 30.000
// --- express : Rp45.000
// --- same-day : Rp60.000

let packageType: string = "express"
let weight: number = 3.2 // dalam kilogram
let cost: number = 0

switch (packageType) {
    case "regular":
        if (weight <= 1) {
            cost = 10000
        } else if (weight <= 5) {
            cost = 20000
        } else {
            cost = 30000
        }
        break;

    case "express":
        if (weight <= 1) {
            cost = 15000
        } else if (weight <= 5) {
            cost = 30000
        } else {
            cost = 45000
        }
        break;

    case "same-day":
        if (weight <= 1) {
            cost = 20000
        } else if (weight <= 5) {
            cost = 40000
        } else {
            cost = 60000
        }
        break;

    default:
        console.log("Invalid package type")
}

if (cost > 0) {
    console.log('Shipping type : ', packageType)
    console.log('Weight : ', weight)
    console.log('Total cost : ', cost.toLocaleString("id-ID"))
}
