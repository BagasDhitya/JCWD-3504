function getPrimitives(arr: any[]) {
    let result: any[] = []

    for (let i: number = 0; i < arr.length; i++) {
        let value: any = arr[i]
        let type: any = typeof value

        if (value === null
            || type === "string"
            || type === "number"
            || type === "boolean"
            || type === "undefined") {
            result[result.length] = value
        }
    }

    return result
}

const randomizeArray: any[] = [1, [], undefined, {}, "string", {}, []]
console.log(getPrimitives(randomizeArray))