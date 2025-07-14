// Primitive types
let username: string = 'John Doe'
let age: number = 30
let isOnline: boolean = true
let nothing: null = null

// let generateNumber: number = '1234' -> ini akan error, karena nilai tidak sesuai dengan tipe data

// Non Primitive types
let hobbies: string[] = ['reading', 'coding', 'hiking']
let year: number[] = [2022, 2023, 2024, 2025]
let combine: [string, string, number, number] = ['abc', 'def', 123, 456]

let user: { name: string, age: number } = {
    name: 'John Doe',
    age: 30
}

console.log("Year : ", year)
console.log("User : ", user)