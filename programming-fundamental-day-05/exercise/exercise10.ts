// pseudo code
// - buat array kosong result
// - loop arr1:
// -- jika elemen tidak ada di arr2, tambahkan ke result
// -- jika elemen tidak ada di arr1, tambahkan ke result
// - return result

// solusi
function differenceArrays(arr1: number[], arr2: number[]) {
    let result: number[] = []

    // elemen dari arr1 yang tidak ada di arr2
    for (let i: number = 0; i < arr1.length; i++) {
        let found: boolean = false // untuk menandakan apakah elemen ada yang sama atau tidak
        for (let j: number = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                found = true
            }
        }

        // untuk menemukan elemen yang tidak duplikat atau unik
        if (!found) {
            result[result.length] = arr1[i]
        }
    }

    // elemen dari arr2 yang tidak ada di arr1
    for (let i: number = 0; i < arr2.length; i++) {
        let found: boolean = false
        for (let j: number = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                found = true
            }
        }

        // untuk menemukan elemen yang tidak duplikat atau unik
        if (!found) {
            result[result.length] = arr2[i]
        }
    }

    return result
}

const array1: number[] = [1, 2, 3, 4, 5]
const array2: number[] = [3, 4, 5, 6, 7]
console.log(differenceArrays(array1, array2))