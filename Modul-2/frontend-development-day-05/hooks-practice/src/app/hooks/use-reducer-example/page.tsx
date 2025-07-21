'use client'
import { counterReducer } from "@/utils/counterReducer"
import { useRouter } from "next/navigation"
import { useReducer } from "react"

export default function UseReducerExample() {

    const [counterState, dispatchCounter] = useReducer(counterReducer, { count: 0 })
    const router = useRouter()

    return (
        <div className={`w-screen h-screen flex flex-col justify-center items-center 
        p-4 space-y-4`}>
            <div className="flex justify-evenly items-center">
                <button
                    onClick={() => dispatchCounter({ type: 'increment' })}
                    className="w-40 h-16 p-3 bg-green-500 hover:bg-green-600 cursor-pointer font-bold rounded-md text-white"> + </button>
                <h2 className={`font-bold text-lg`}>Counter : {counterState.count}</h2>
                <button
                    onClick={() => dispatchCounter({ type: 'decrement' })}
                    className="w-40 h-16 p-3 bg-red-500 hover:bg-red-600 cursor-pointer font-bold rounded-md text-white"> - </button>
            </div>
            <button
                onClick={() => {
                    router.push(`test-reducer?counter=${counterState.count}`)
                }}
                className="p-3 bg-yellow-500 text-black">Navigate to 'Test Reducer Page'</button>
        </div>
    )
}
