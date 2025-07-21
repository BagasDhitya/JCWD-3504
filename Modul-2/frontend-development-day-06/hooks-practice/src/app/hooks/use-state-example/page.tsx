'use client'
import { InputHTMLAttributes, useState } from "react"

export default function UseStateExample() {

    // counter (state) -> nilai
    // setCounter (setState) -> pengubah nilai
    const [counter, setCounter] = useState<number>(0)
    const [text, setText] = useState<string>("Hello")
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    function displayMode() {
        if (!isDarkMode) {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)
        }
    }

    function incrementCount() {
        setCounter(counter + 1)
    }

    function decrementCount() {
        if (counter <= 0) {
            alert('Cannot input negative number!')
        } else {
            setCounter(counter - 1)
        }
    }

    return (
        <div className={`w-screen h-screen flex flex-col justify-center items-center 
        p-4 space-y-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="flex justify-evenly items-center">
                <button className="p-3 bg-red-500 rounded-md text-white" onClick={displayMode}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
            </div>
            <div className="flex justify-evenly items-center">
                <button
                    onClick={incrementCount}
                    className="w-40 h-16 p-3 bg-green-500 hover:bg-green-600 cursor-pointer font-bold rounded-md text-white"> + </button>
                <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Counter : {counter}</h2>
                <button
                    onClick={decrementCount}
                    className="w-40 h-16 p-3 bg-red-500 hover:bg-red-600 cursor-pointer font-bold rounded-md text-white"> - </button>
            </div>
            <div className="flex flex-col-reverse justify-center items-center">
                <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Text : {text}</h2>
                <input
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    className={`${isDarkMode ? 'border border-white' : 'border border-black'} rounded-md p-3`}
                />
            </div>
        </div>
    )
}
