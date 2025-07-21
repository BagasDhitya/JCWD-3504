'use client'
import { useState, useEffect } from "react"

export default function UseEffectExample() {

    const [username, setUsername] = useState<string>("")

    // lifecycle component -> daur hidup komponen
    // fase mounting
    useEffect(() => {
        console.log('Component did mount')
    }, [])

    // fase unmounting
    useEffect(() => {
        console.log('unmounting ...')
        return () => {
            console.log('Component unmounting')
        }
    }, [])

    // fase updating
    useEffect(() => {
        console.log('username : ', username)
    }, [username]) // -> array dependencies, untuk melakukan updating saat state berubah


    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div>
                <h2 className="text-lg font-semibold">{username ? username : 'Please input your username'}</h2>
                <input
                    className="border rounded-md p-3"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />
            </div>
        </div>
    )
}
