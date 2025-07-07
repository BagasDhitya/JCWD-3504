import { simulateCallingJson } from "./jsonSimulation"

// SYNCHRONOUS -> kode dijalankan berdasarkan urutan

function greeting() {
    return "Hello, Good Morning"
}

function saySomething() {
    return "How are you today?"
}

// kode akan berjalan sinkronus sesuai urutan pemanggilan fungsi
// console.log(saySomething())
// console.log(greeting())

// ASYNCHRONOUS -> kode dijalankan berdasarkan processing time

function boilWater() {
    setTimeout(() => {
        console.log("Sedang merebus air ...")
    }, 3000) // 3000 milisecond = 3 detik
}

function finalResult() {
    console.log("Air sudah matang")
}

// boilWater()
// finalResult() // akan dijalankan duluan karena memiliki processing time yang lebih cepat

// CALLBACK -> sebuah fungsi yang dipanggil oleh fungsi lain melalui parameter

// case 1 : simulasi order ojol
function orderOjol(pickup: string, destination: string, callback: () => void) {
    console.log(`Mencari driver dari ${pickup} ke ${destination} ...`)
    setTimeout(() => {
        console.log(`Driver ditemukan dan sedang menuju ke lokasi penjemputan`)
        callback()
    }, 3000)
}

function onDriverArrived() {
    console.log("Driver sudah tiba, silakan naik.")
}

// orderOjol("Rumah", "Kantor", onDriverArrived)

// case 2 : mengelola jadwal meeting
function scheduleMeeting(time: string, callback: (confirmed: boolean) => void) {
    console.log(`Mengatur meeting pada jam ${time} ...`)
    setTimeout(() => {
        const isConfirmed = time === "10:00"
        callback(isConfirmed)
    }, 3000)
}

function confirmMeeting(confirmed: boolean) {
    if (confirmed) {
        console.log("Meeting dikonfirmasi ...")
    } else {
        console.log("Waktu tidak tersedia")
    }
}

// scheduleMeeting("10:00", confirmMeeting)

// case 3 : proses cuci mobil

// alur :
// 1. mobil datang ke tempat cuci
// 2. proses cuci dimulai
// 3. setelah selesai dicuci, proses pengeringan dimulai
// 4. setelah dikeringkan, ada notifikasi bahwa mobil sudah siap diberikan ke pemilik

function washCar(carName: string, callback: (car: string) => void) {
    console.log(`Mobil ${carName} datang ke tempat cuci.`)
    setTimeout(() => {
        console.log(`Mobil ${carName} sedang dicuci ...`)
        callback(carName)
    }, 3000)
}

function dryCar(carName: string, callback: (car: string) => void) {
    setTimeout(() => {
        console.log(`Mobil ${carName} sedang dikeringkan ...`)
        callback(carName)
    }, 1500)
}

function finishProcess(carName: string) {
    console.log(`Mobil ${carName} sudah selesai dicuci dan dikeringkan. Silakan diambil ...`)
}

// washCar("Avanza", function (car) {
//     dryCar(car, function (car) {
//         finishProcess(car)
//     })
// })

// PROMISE -> untuk menghandle kejadian sukses/gagal

// case 1 : undian berhadiah
interface Lottery {
    status: string,
    message: string
}

function lotteryDraw(): Promise<Lottery> {
    return new Promise((resolve, reject) => {
        console.log("Undian dimulai ...")
        const win: boolean = Math.random() > 0.7
        setTimeout(() => {
            if (win) {
                resolve({
                    status: "success",
                    message: "Selamat! Kamu menang undian"
                })
            } else {
                reject({
                    status: "failed",
                    message: "Maaf, belum beruntung"
                })
            }
        }, 3500)
    })
}

// lotteryDraw()
//     .then((response) => { // then pasangannya resolve
//         console.log(response)
//     })
//     .catch((error) => { // catch pasangannya reject
//         console.log(error)
//     })
//     .finally(() => { // akan selalu dieksekusi belakangan
//         console.log("Undian telah berakhir")
//     })

// case 2 : pembayaran tagihan online
function payBill(amount: number): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log(`Memproses pembayaran sebesar Rp${amount} ...`)
        setTimeout(() => {
            if (amount >= 100000) {
                resolve("Pembayaran berhasil!")
            } else {
                reject("Saldo tidak cukup.")
            }
        }, 4000)
    })
}

// payBill(90000)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// ASYNC AWAIT -> untuk memprioritaskan fungsi yang terdapat promise

// perbedaan mendasar antara promise biasa dengan async await :

// tanpa async await (mendaftar kursus online)
function enrollCourse(course: string): Promise<string> {
    let courseList: string[] = ["TypeScript", "PHP", "Python"]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (courseList.includes(course)) {
                resolve(`Berhasil mendaftarkan kursus : ${course}`)
            } else {
                reject("Kursus tidak tersedia")
            }
        }, 2500)
    })
}

// enrollCourse("TypeScript")
//     .then((response) => {
//         console.log(response)
//     })

// dengan async await (mendaftar kursus online)
async function enrollCourseAsync(course: string) {
    try {
        const result = await enrollCourse(course)
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Done ...")
    }
}

// enrollCourseAsync("PHP")

// THROW ERROR -> melempar error langsung sebelum masuk catch
function validateAge(age: number) {
    if (age < 18) {
        throw new Error("Usia minimal adalah 18 tahun")
    }
    console.log("Pendaftaran berhasil")
}

async function confirmation() {
    try {
        const result = await validateAge(16)
        console.log(result)
    } catch (error) {
        console.log("Gagal:", (error as Error).message)
    }
}

// confirmation()
console.log(simulateCallingJson('name'))