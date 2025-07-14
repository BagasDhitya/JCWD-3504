type Item = {
    health: number
    power: number
}

// Player class
class Player {
    public name: string
    public health: number
    public power: number

    constructor(name: string) {
        this.name = name
        this.health = 100 // default health
        this.power = 10 // default power
    }

    // dikurangi sesuai power lawan
    public damage(attackPower: number): void {
        this.health = this.health - attackPower
    }

    // tambah item (bisa health atau power)
    public useItem(item: Item): void {
        this.health = this.health + item.health
        this.power = this.power + item.power
    }

    // menampilkan status pemain
    public showStatus(): void {
        console.log(this.name + " (Health => " + this.health + ", Power => " + this.power + ")")
    }
}

// ShootingGame class
class ShootingGame {
    private player1: Player
    private player2: Player

    constructor(player1: Player, player2: Player) {
        this.player1 = player1
        this.player2 = player2
    }

    // mengembalikan item acak : health +10 atau power +10
    public getRandomItem(): Item {
        const num: number = Math.floor(Math.random() * 2)
        if (num == 0) {
            return {
                health: 10,
                power: 0
            }
        } else {
            return {
                health: 0,
                power: 10
            }
        }
    }

    // memulai permainan
    public start(): void {
        let turn: number = 1

        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log("====== Turn " + turn + " ======")

            // status sebelum item dan tembak
            this.player1.showStatus()
            this.player2.showStatus()

            // dapatkan item dulu
            const item1 = this.getRandomItem()
            const item2 = this.getRandomItem()
            this.player1.useItem(item1)
            this.player2.useItem(item2)

            // status sesudah dapat item
            console.log(">> After using item : ")
            this.player1.showStatus()
            this.player2.showStatus()

            // tembak
            this.player2.damage(this.player1.power)
            if (this.player2.health <= 0) {
                console.log(">> " + this.player1.name + " WINS!")
                return
            }

            this.player1.damage(this.player2.power)
            if (this.player1.health <= 0) {
                console.log(">> " + this.player2.name + " WINS!")
                return
            }
            turn = turn + 1
        }
    }

}

const p1 = new Player("Player A")
const p2 = new Player("Player B")
const game = new ShootingGame(p1, p2)
game.start()