// pseudo code
// - buat array choices = ["rock", "paper", "scissor"]
// - gunakan math random untuk memilih salah satu pilihan komputer
// - bandingkan pilihan player vs komputer:
// -- jika sama -> draw
// -- tentukan siapa menang berdasarkan aturan :
// --- rock > scissor, scissor > paper, paper > rock
// - return hasil : "Win", "Lose", atau "Draw"

// solusi
function rockPaperScissor(player: string) {
    let choices: string[] = ["rock", "paper", "scissor"]

    // pilih index acak dari 0 sampai 2
    let randomIndex: number = Math.floor(Math.random() * 3)
    let computer: string = choices[randomIndex]

    console.log("Computer choses : ", computer)

    // jika sama
    if (player === computer) {
        return "Draw"
    }

    // kondisi menang
    if (player === "rock" && computer === "scissor"
        || player === "scissor" && computer === "paper"
        || player === "paper" && computer === "rock") {
        return "Win"
    }

    // selain itu kalah
    return "Lose"
}

console.log(rockPaperScissor("rock"))