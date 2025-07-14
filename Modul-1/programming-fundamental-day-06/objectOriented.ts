// -- OBJECT

let person = {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
        street: "Jl. Sudirman",
        zip: 1234
    },
    hobbies: ["diving", "coding", "hiking"],
    devices: [['Smartphone', 'Samsung'], ['Car', 'Agya']]
}

console.log(person)
console.log("name : ", person.name)
console.log("age : ", person.age)
console.log("street : ", person.address.street)
console.log("accessing 'hiking' : ", person.hobbies[2])
console.log("accessing 'Samsung' : ", person.devices[0][1])

console.log(" ---------------------------------------------------- ")

// -- Interface : untuk mendeklarasikan isi dari object

// tanpa interface
let order: { id: string, items: any[], total: number } = {
    id: "",
    items: [],
    total: 0,
}

// dengan interface
interface OrderProduct {
    id: string,
    items: any[],
    total: number
}

let orderProduct: OrderProduct = {
    id: "ORD123",
    items: [
        { product: "Laptop", price: 1000 },
        { product: "Mouse", price: 50 }
    ],
    total: 1050,
}

// Types : mirip seperti interface, tapi bisa digunakan untuk tipe data selain object

type Product = {
    name: string,
    price: number
}

type Receipient = {
    street: string,
    zip: number
}

type Status = "pending" | "delivered" | "shipped"

// case 1 : membuat object sebuah paket
interface Package {
    id: string,
    type: 'express' | 'same day' | 'regular', // union type
    items: Product[],
    status: Status,
    weight: number,
    prices: number,
    receipient: Receipient
    send: () => string
}

let productPackage: Package = {
    id: "PKG-123",
    type: 'express',
    items: [
        {
            name: "Laptop",
            price: 1000
        }, {
            name: "Mouse",
            price: 50
        }],
    status: 'delivered',
    weight: 1,
    prices: 23000,
    receipient: {
        street: "Jl. Sudirman",
        zip: 1234
    },
    send: () => {
        return "Sending package ..."
    }
}

console.log("Package status : ", productPackage.send())

console.log(" --------------------------------------- ")

// -- ADD & DELETE PROPERTY
// jika mau melakukan add dan delete, maka object harus dijadikan any

// add property
let animal: any = {}
animal.name = "Cat"
animal.age = 5
animal.food = "Royal Canin"

console.log("animal : ", animal)

// delete property
let car: any = {
    model: 'sedan',
    year: 2010
}

console.log("before delete year : ", car)
delete car.year
console.log("after delete year : ", car)

console.log(" ------------------------------------------- ")

// MUTABLE -> kondisi dimana variabel bisa dimodifikasi
// IMMUTABLE -> sebaliknya MUTABLE

// Contoh Mutable
interface People {
    name: string,
    age: number
}

let people: People = {
    name: 'Bob',
    age: 40
}

people.age = 45 // kondisinya mutable, karena bisa update nilai dari property age
console.log(people)

let score: number[] = [10, 20]
score.push(30) // menambah data, sehingga kondisinya mutable
console.log(score)

// Contoh Immutable
const age: number = 50
// age = 20 // jika tidak bisa dimodifikasi, maka menjadi immutable

const book = {
    id: 1,
    title: 'Harry Potter'
} as const

// book.title = 'Lord Of The Rings' // object juga bisa jadi immutable, apabila dideklarasikan menggunakan const

console.log(' ------------------------------------- ')

// -- FOR IN OBJECT
let smartphone: any = {
    id: "1234",
    name: "Oppo Reno",
    processor: "Snapdragon"
}

for (let key in smartphone) {
    console.log(`${key} : ${smartphone[key]}`)
}

console.log(' ------------------------------------- ')

// -- DESTRUCTURING ASSIGNMENT
interface User {
    nickname: string,
    personAge: number,
    addressPerson: {
        city: string,
        country: string
    }
}

let user: User = {
    nickname: "Alice",
    personAge: 28,
    addressPerson: {
        city: "Jakarta",
        country: "Indonesia"
    }
}

// accessing value tanpa destructuring
console.log('accessing name without destructuring : ', user.nickname)
console.log('accessing age without destructuring : ', user.personAge)
console.log('accessing location without destructuring : ', user.addressPerson)

console.log(' ------------------------------------- ')
// accessing value dengan destructuring
let { nickname, personAge, addressPerson: { city, country } } = user

console.log('accessing name with destructuring : ', nickname)
console.log('accessing age with destructuring : ', personAge)
console.log('accessing city with destructuring : ', city)
console.log('accessing country with destructuring : ', country)

console.log(' ------------------------------------- ')

// -- SPREAD OPERATOR
// untuk cloning atau duplikat data
interface Vehicle {
    id: string,
    type: 'sedan' | 'suv' | 'bus',
    year: number
}

let vehicle: Vehicle = {
    id: 'VH-123',
    type: 'sedan',
    year: 2010
}

let newVehicle = { ...vehicle, isSold: false }

console.log('new vehicle : ', newVehicle)

console.log(' --------------- ')
let scoring1: number[] = [9, 10, 11, 12]
let scoring2: number[] = [7, 6, 8]

let newScoring = [...scoring1, ...scoring2]
let sortingScoring = newScoring.sort((x, y) => x - y)

console.log("new scoring : ", newScoring)
console.log("sorted scoring : ", sortingScoring)