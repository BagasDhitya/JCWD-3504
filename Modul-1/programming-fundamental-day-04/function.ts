// -- FUNCTION
// untuk mengumpulkan kode ke dalam satu tempat

// case 1 : perkenalan diri
function introduceMyself(name: string, profession: string): string {
    let text: string = `Hello, my name is ${name} and I'm ${profession}`
    return text
}

console.log(introduceMyself('Bagas', 'Software Engineer'))
console.log(introduceMyself('Theo', 'Software Engineer'))
console.log(introduceMyself('Imam', 'Software Engineer'))
console.log(introduceMyself('Rafli', 'Software Engineer'))
console.log(introduceMyself('Figo', 'Software Engineer'))

console.log(" --------------------------------------------- ")

// case 2 : menjumlahkan total nilai dari student
function sumScore(score: number[]): number {
    let result: number = 0
    for (let i = 0; i < score.length; i++) {
        result += score[i]
    }

    return result
}

const studentScore: number[] = [50, 70, 80, 85, 90, 90, 60]
console.log('total score of students : ', sumScore(studentScore))

console.log(" --------------------------------------------- ")

// case 3 : undian berhadiah

// 1 -> BMW
// 2 -> Vespa
// 3 -> Trip to Singapore
// 4 -> Shopping Voucher

function drawPrize(luckyNumber: number): string {
    let prize: string

    switch (luckyNumber) {
        case 1:
            prize = "Congratulations! You won a BMW car!"
            break
        case 2:
            prize = "Congratulations! You won a Vespa scooter"
            break
        case 3:
            prize = "Congratulations! You won a holiday trip to Singapore"
            break
        case 4:
            prize = "Congratulations! You won a shopping voucher!"
            break
        default:
            prize = "Better luck next time!"
    }

    return `Your luck number is ${luckyNumber} -> ${prize}`
}

const participantMember = Math.floor(Math.random() * 10)
console.log("Prize number : ", participantMember)
console.log(drawPrize(participantMember))

console.log(" --------------------------------------------- ")

// -- FUNCTION expression
// -- sebuah fungsi yang dimasukkan ke dalam variabel

// case 1 : menghitung apakah suhu hari ini panas
const isHot = function (temp: number): boolean {
    return temp > 30
}

console.log(isHot(20))

// -- FUNCTION hoisting 
// declaration function -> bisa dihoisting
console.log('Test hositing on testDeclareFunction : ', testDeclareFunction())
function testDeclareFunction() {
    return "Hello"
}

// expression function -> tidak bisa dihoisting
// 
// console.log('Test hositing on testExpressionFunction : ', testExpressionFunction())
const testExpressionFunction = function () {
    return "Hello"
}

console.log(" --------------------------------------------- ")

// -- NESTED FUNCTION
// case 1 : membuat teh

function makeTea(): string {

    function boilWater(): string {
        return "Boiling water ..."
    }

    function addTeaLeaves(): string {
        return "Adding tea leaves ..."
    }

    console.log(boilWater())
    console.log(addTeaLeaves())
    return "Tea is ready"
}

console.log(makeTea())

console.log(" --------------------------------------------- ")

// -- CLOSURE FUNCTION
// sebuah fungsi dimana mempunyai return berupa fungsi juga

// case 1 : counter function
function createCounter(): () => void {
    let count: number = 0
    return function () {
        count++
        console.log(`Current count : ${count}`)
    }
}

const myCounter = createCounter()
myCounter()
myCounter()
myCounter()