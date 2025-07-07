// tipe data umum untuk menerima array berisi object
type AnyObject = {
    [key: string]: any
}

function invertKeyValueArray(input: AnyObject[]) {
    let result: AnyObject[] = [] // array penampung hasil akhir

    // loop setiap objek dalam array input
    for (let i: number = 0; i < input.length; i++) {
        let currentObj = input[i]
        let invertedObj: AnyObject = {}

        // loop manual untuk setiap properti di dalam object
        for (let key in currentObj) {
            if (currentObj.hasOwnProperty(key)) {
                let value = currentObj[key]

                // buat key baru dari value dan assign valuenya sebagai key sebelumnya
                // gunakan casting ke string untuk memastikan key valid
                invertedObj[value + ""] = key
            }
        }
        // masukkan hasil ke array result
        result.push(invertedObj)
    }

    return result
}

const inputData: AnyObject[] = [
    { name: 'David', age: 20 }
]
const outputData = invertKeyValueArray(inputData)
console.log("Hasil penukaran key dan value : ")
for (let i: number = 0; i < outputData.length; i++) {
    console.log(outputData[i])
}