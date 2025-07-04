type Student = {
    name: string,
    email: string,
    age: Date, // tanggal lahir
    score: number
}

class StudentStatCalculator {
    private student: Student[]

    constructor(student: Student[]) {
        this.student = student
    }

    // fungsi/method untuk menghitung umur dari tanggal lahir
    private getAgeInYears(birthDate: Date) {
        const now: Date = new Date() // tanggal hari ini
        let ageStudent: number = now.getFullYear() - birthDate.getFullYear() // tahun umur student

        // cek apakah bulan/tanggal lahir belum lewat tahun ini
        if (now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
            ageStudent = ageStudent - 1
        }

        return ageStudent
    }

    // fungsi/method utama untuk menghitung statistik
    public calculate() {

        let highestScore: number = -Infinity
        let lowestScore: number = Infinity
        let totalScore: number = 0

        let highestAge: number = -Infinity
        let lowestAge: number = Infinity
        let totalAge: number = 0

        let count = 0

        // looping untuk menghitung semua nilai
        for (let i: number = 0; i < this.student.length; i++) {
            const score: number = this.student[i].score // untuk nampung score tiap index yang dilewati
            const age: number = this.getAgeInYears(this.student[i].age)

            // update skor tertinggi/terendah dan total
            if (score > highestScore) {
                highestScore = score
            }

            if (score < lowestScore) {
                lowestScore = score
            }

            totalScore += score

            // update umur tertinggi/terendah dan total
            if (age > highestAge) {
                highestAge = age
            }

            if (age < lowestAge) {
                lowestAge = age
            }

            totalAge += age
            count++
        }

        return {
            score: {
                highest: highestScore,
                lowest: lowestScore,
                average: count > 0 ? totalScore / count : 0
            },
            age: {
                highest: highestAge,
                lowest: lowestAge,
                average: count > 0 ? totalAge / count : 0
            }
        }
    }
}

const studentList: Student[] = [
    {
        name: "Alice",
        email: "alice@mail.com",
        age: new Date(2000, 4, 10),
        score: 88
    },
    {
        name: "Bob",
        email: "bob@mail.com",
        age: new Date(1998, 10, 25),
        score: 76
    },
    {
        name: "Charlie",
        email: "charlie@mail.com",
        age: new Date(2000, 0, 5),
        score: 92
    }
]

const calculator = new StudentStatCalculator(studentList)
const result = calculator.calculate()
console.log(result)