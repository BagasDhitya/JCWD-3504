'use client'
import { useMemo, useState } from 'react'

export default function UseMemoExample() {

    const [count, setCount] = useState<number>(0)
    const [other, setOther] = useState<number>(0)

    // doubleCount -> implementasi untuk memaksimalkan performa supaya rendering tidak dilakukan sebanyak perhitungannya
    // perhitungan ini hanya akan dijalankan ulang saat "count" berubah
    function doubleCount() {
        return useMemo(() => {
            console.log('Calculating double ...')
            return count * 2
        }, [count])
    }

    // bahasa mudah : kamu hitung 4x, tapi yang dibaca oleh browser baru sebanyak 2x refresh

    console.log('state count : ', count)
    console.log('state other : ', other)

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <h2 className='text-xl font-bold'>useMemo Example</h2>
            <div className='space-y-2'>
                <p>Count (increment only, using state 'count') : {count}</p>
                <p>Double count (memoized) : {doubleCount()}</p>
                <p>Other (decrement only, using state 'other') : {other}</p>
            </div>
            <div className='flex gap-4'>
                <button className='p-3 bg-green-500 rounded-md' onClick={() => setCount(count + 1)}>Increment Count</button>
                <button className='p-3 bg-red-500 rounded-md' onClick={() => setOther(other - 1)}>Decrement Count</button>
            </div>
        </div>
    )
}
