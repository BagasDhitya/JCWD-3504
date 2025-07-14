
// pseudo code:

// jika array kosong -> return string kosong
// jika hanya 1 kata -> return kata itu
// jika 2 kata -> return "kata1 and kata2"
// jika lebih :
// - gabungkan semua kecuali terakhir dengan koma
// - tambahkan ', and' + kata terakhir

// solusi :
function combineWords(arr: string[]): string {
    let result: string = "" // untuk nampung hasil

    if (arr.length === 0) return ""
    if (arr.length === 1) return arr[0]
    if (arr.length === 2) return arr[0] + " and " + arr[1]

    for (let i: number = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            result = result + ",and " + arr[i] // untuk kata terakhir
            // result = "apple,banana,cherry,and date"
        } else if (i === 0) {
            result = arr[i] // kata pertama
            // result = "apple"
        } else {
            result = result + "," + arr[i]
            // result = "apple,banana,cherry"
        }
    }
    return result
}

let fruits: string[] = ["apple", "banana", "cherry", "date"]
console.log(combineWords(fruits))