'use client'
import { useSearchParams } from "next/navigation";

export default function TestReducer() {

    const searchParams = useSearchParams()
    const countValue = searchParams.get('counter')

    console.log('count value : ', countValue)

    return (
        <div>Counter from counterReducer : {countValue}</div>
    )
}
