// Parent class : Employee

class Employee {
    protected name: string
    protected workingHours: number[] // menyimpan jam kerja per hari

    constructor(name: string) {
        this.name = name
        this.workingHours = []
    }

    // method untuk menambahkan jam kerja
    public addWorkingHour(hours: number): void {
        if (hours > 0) {
            const length: number = this.workingHours.length
            this.workingHours[length] = hours
        }
    }

    //method untuk menghitung total gaji (dioverride ke child class)
    public calculateSalary(): number {
        return 0
    }
}

// child class : Fulltime Employee
class FulltimeEmployee extends Employee {
    constructor(name: string) {
        super(name)
    }

    // calculateSalary dioverride dari Employee
    public calculateSalary(): number {
        let totalSalary: number = 0
        let i: number = 0

        while (i < this.workingHours.length) {
            const hour: number = this.workingHours[i]

            if (hour > 6) {
                totalSalary = totalSalary + hour * 75000
            } else {
                totalSalary = totalSalary + hour * 100000
            }
            i = i + 1
        }

        return totalSalary
    }
}

// child class : Parttime Employee
class ParttimeEmployee extends Employee {
    constructor(name: string) {
        super(name)
    }

    // calculateSalary dioverride dari Employee
    public calculateSalary(): number {
        let totalSalary: number = 0
        let index: number = 0

        while (index < this.workingHours.length) {
            const hour: number = this.workingHours[index]

            if (hour > 6) {
                totalSalary = totalSalary + hour * 30000
            } else {
                totalSalary = totalSalary + hour * 50000
            }
            index = index + 1
        }

        return totalSalary
    }
}

const fullTime = new FulltimeEmployee("Budi")
fullTime.addWorkingHour(5) // 5 * 100.000 = 500.000
fullTime.addWorkingHour(7) // 7 * 75.000 = 525.000
const totalFulltimeSalary: number = fullTime.calculateSalary()
console.log("Gaji Budi (Full-Time) : Rp", totalFulltimeSalary)

const partTime = new ParttimeEmployee("Tina")
partTime.addWorkingHour(4) // 4 * 50.000 = 200.000
partTime.addWorkingHour(8) // 8 * 30.000 = 240.000
const totalParttimeSalary: number = partTime.calculateSalary()
console.log("Gaji Tina (Part-Time) : Rp", totalParttimeSalary)