'use client'
import { useEffect, useState } from "react"
import { useOnlineStore } from "@/utils/onlineStore"

export default function Navbar() {

    const { isOnline, checkOnlineStatus } = useOnlineStore()
    const [isActive, setIsActive] = useState<boolean>(true)
    const IDLE_TIMEOUT = 5000 // 5 detik untuk idle



    useEffect(() => {
        // cek status online hanya sekali saat komponen mounting
        checkOnlineStatus()

        let idleTimer: NodeJS.Timeout;

        function handleUserActivity() {
            setIsActive(true)
            clearTimeout(idleTimer)
            idleTimer = setTimeout(() => {
                setIsActive(false)
            }, IDLE_TIMEOUT)
        }

        // event listeners untuk aktivitas pengguna
        window.addEventListener('mousemove', handleUserActivity)
        window.addEventListener('scroll', handleUserActivity)
        window.addEventListener('keydown', handleUserActivity)

        // set timer awal
        idleTimer = setTimeout(() => setIsActive(false), IDLE_TIMEOUT)

        // clean up
        return () => {
            clearTimeout(idleTimer)
            window.removeEventListener('mousemove', handleUserActivity)
            window.removeEventListener('scroll', handleUserActivity)
            window.removeEventListener('keydown', handleUserActivity)
        }

    }, [checkOnlineStatus])

    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center fixed top-0 w-screen">
            <h1 className="text-xl font-bold">Hooks Practice</h1>
            <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full
                    text-sm font-medium ${isOnline ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}`}>
                    {isOnline ? 'Online' : 'Offline'}
                </span>
                <button
                    onClick={checkOnlineStatus}
                    className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300">
                    Refresh Status
                </button>
            </div>
        </nav>
    )
}
