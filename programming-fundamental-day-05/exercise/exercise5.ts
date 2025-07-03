// pseudo codde:

// loop semua elemen array:
// - jika elemen sama dengan newElement -> return array
// - jika tidak ditemukan -> tambahkan newElement ke akhir array
// - return array

// solusi :
function addIfNotExist(arr: number[], newElement: number) {
    let found: boolean = false // untuk menandakan bahwa apakah element yang duplikat ditemukan atau tidak

    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === newElement) {
            found = true
        }
    }

    if (!found) {
        arr[arr.length] = newElement // tambahkan di akhir jika newElement itu unik alias tidak duplikat
    }

    return arr
}

let originArr: number[] = [1, 2, 3, 4]
let newElement: number = 7

console.log(addIfNotExist(originArr, newElement))