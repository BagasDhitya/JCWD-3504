'use client'
import { useState, useRef } from 'react'

export default function UseRefExample() {

    const countRef = useRef(0)
    const renderRef = useRef(0)
    const [trigger, setTrigger] = useState<boolean>(false) // state untuk trigger render

    // increment tanpa menyebabkan re-render/refresh browser
    function incrementRef() {
        countRef.current++
        alert(`countRef is now : ${countRef.current}`)
    }

    // triggerRender memaksa re-render/refresh pada browser
    function triggerRender() {
        renderRef.current++
        setTrigger(!trigger) // penyebab re-rendering nya
    }

    console.log('countRef : ', countRef.current)
    console.log('berapa kali rendering : ', renderRef.current)

    return (
        <div className={`w-screen h-screen flex flex-col justify-center items-center 
        p-4 space-y-4`}>
            <div className="flex justify-evenly items-center">
                <button
                    onClick={incrementRef}
                    className="w-40 h-16 p-3 bg-green-500 hover:bg-green-600 cursor-pointer font-bold rounded-md text-white"> + </button>
                <h2 className={`font-bold text-lg`}>Counter : </h2>
                <button
                    className="w-40 h-16 p-3 bg-red-500 hover:bg-red-600 cursor-pointer font-bold rounded-md text-white"> - </button>
            </div>
            <div className="flex justify-evenly items-center">
                <button
                    onClick={triggerRender}
                    className="w-40 h-16 p-3 bg-yellow-500 hover:bg-yellow-600 cursor-pointer font-bold rounded-md text-black">
                    Re render Now! </button>
            </div>
        </div>
    )
}
