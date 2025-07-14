
// pseudo code:
// buat variabel 'min' dan 'secondMin' isi dengan Infinity
// loop setiap angka
// - jika angka < min:
// -- secondMin = min
// -- min = angka
// - else if angka < secondMin dan angka !== min:
// -- secondMin = angka
// return secondMin

// solusi :
function getSecondSmallest(arr: number[]) {
    let min: number = Infinity // untuk mencari bilangan terkecil
    let secondMin: number = Infinity // untuk mencari bilangan terkecil kedua

    for (let i: number = 0; i < arr.length; i++) {
        let current = arr[i] // untuk nampung setiap index yang dilalui
        // current = 2

        if (current < min) {
            secondMin = min
            // secondMin = 3
            min = current
            // min = 1
        } else if (current < secondMin && current !== min) {
            secondMin = current
            // secondMin = 2
        }
    }

    return secondMin
}

let numbers: number[] = [5, 3, 1, 7, 2, 6]
console.log(getSecondSmallest(numbers))