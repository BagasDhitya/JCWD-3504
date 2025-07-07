import { data } from "./users.json"

export function simulateCallingJson(calling: string) {
    let list: any[]
    if (calling === 'name') {
        list = data.map((item) => item.name)
    } else if (calling === 'id') {
        list = data.map((item) => item.id)
    } else if (calling === 'class') {
        list = data.map((item) => item.class)
    } else {
        return "Wrong argument"
    }

    return list
}

// console.log(simulateCallingJson('class'))