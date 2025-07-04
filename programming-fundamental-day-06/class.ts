// -- CLASS DECLARATION
// merupakan sebuah object yang dapat menampung property/function

class Cat {
    name: string = "Whiskers"
    sound: string = "Meow"

    makeSound() {
        console.log(this.sound)
    }
}

const myCat = new Cat()
// myCat.makeSound()

// console.log('name : ', myCat.name)
// console.log('sound : ', myCat.sound)

// console.log(' ------------------------------ ')

class BankAccount {
    balance: number = 1000
    currency: string = "USD"

    deposit(amount: number) {
        this.balance += amount
    }

    withdraw(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount
        }
    }
}

// const account = new BankAccount()
// account.deposit(5000)
// console.log('after deposit : ', account.balance)
// account.withdraw(500)
// console.log('after withdraw : ', account.balance)

// console.log(' ------------------------------ ')

class HeroCharacter {
    id: number = 0
    name: string = ""
    role: 'mage' | 'assassin' | 'tank' | 'default' = 'default'
    listCharacter: any[] = []

    createCharacter(id: number, name: string, role: 'mage' | 'assassin' | 'tank' | 'default') {
        this.id = id
        this.name = name
        this.role = role

        let char = {
            id: this.id,
            name: this.name,
            role: this.role
        }

        return this.listCharacter.push(char)
    }
}

// const character = new HeroCharacter()
// character.createCharacter(1, 'mage-001', 'mage')
// character.createCharacter(2, 'tank-002', 'tank')
// console.log(character.listCharacter)

// -- CONSTRUCTOR
// mengizinkan sebuah Class memiliki parameter, layaknya sebuah function

// access modifier : public, private, protected (hak akses untuk mengakses property/method di dalam class)

class Employee {
    public name: string
    public position: string
    private salary: number
    protected id: number // hanya bisa diakses di class utama dan sub class

    constructor(id: number, name: string, position: string, salary: number) {
        this.id = id
        this.name = name
        this.position = position
        this.salary = salary
    }

    public getSalary() {
        return this.salary // encapsulation : private property yang bisa diakses hanya lewat method tertentu
    }

    public promote(newPosition: string, increase: number) {
        this.position = newPosition
        this.salary += increase
    }
}

// konsep inheritance (pewarisan) : sub class bisa memanggil property ataupun method dari class utama
class Person extends Employee {
    public checkEmployementStatus() {
        if (this.id === 201) {
            return "Manager"
        } else {
            return "Staff"
        }
    }
}

const employee = new Employee(202, "John Doe", "Junior Dev", 5000)
employee.promote("Senior Dev", 2000)
// console.log(employee.getSalary())

// console.log("employement position : ", employee.position)
// const person = new Person(202, "John Doe", "Junior Dev", 5000)
// console.log("employement status : ", person.checkEmployementStatus())


// console.log(employee.id) Property 'id' is protected and only accessible within class 'Employee' and its subclasses.ts(2445)
// console.log(employee.salary) Property 'salary' is private and only accessible within class 'Employee'.ts(2341)

// -- SETTER dan GETTER

class Temperature {
    private celsius: number = 0

    set fahrenheit(value: number) {
        this.celsius = (value - 32) / 1.8
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32
    }
}

const temp = new Temperature()
temp.fahrenheit = 100
// console.log(temp.fahrenheit)

class User {
    private name: string = ""

    set user(name: string) {
        this.name = name
    }

    get user() {
        return this.name
    }
}

const create = new User()
create.user = "John Doe"
console.log(create)