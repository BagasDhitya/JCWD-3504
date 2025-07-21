'use client'
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useOnlineStore } from "@/utils/onlineStore"
import { useAuthStore } from "@/utils/authStore"
import { getProfile, removeProfile } from "@/helpers/profile.config"

export default function Navbar() {
    // Hooks and state
    const pathname = usePathname()
    const router = useRouter()
    const { isOnline, checkOnlineStatus } = useOnlineStore()
    const { email } = useAuthStore()
    const emailFromCookie = getProfile()
    const [isActive, setIsActive] = useState<boolean>(true)

    // Constants
    const IDLE_TIMEOUT = 5000 // 5 seconds for idle
    const isLogin = pathname === '/auth/login'

    // Handlers
    function logout() {
        removeProfile()
        alert('You have successfully logged out')
        router.push('/auth/login')
    }

    // Effects
    useEffect(() => {
        // Check online status only once when component mounts
        checkOnlineStatus()

        let idleTimer: NodeJS.Timeout;

        function handleUserActivity() {
            setIsActive(true)
            clearTimeout(idleTimer)
            idleTimer = setTimeout(() => {
                setIsActive(false)
            }, IDLE_TIMEOUT)
        }

        // Event listeners for user activity
        const events = ['mousemove', 'scroll', 'keydown'] as const
        events.forEach(event => {
            window.addEventListener(event, handleUserActivity)
        })

        // Set initial timer
        idleTimer = setTimeout(() => setIsActive(false), IDLE_TIMEOUT)

        // Clean up
        return () => {
            clearTimeout(idleTimer)
            events.forEach(event => {
                window.removeEventListener(event, handleUserActivity)
            })
        }
    }, [checkOnlineStatus])

    // Early return for login page
    if (isLogin) return null

    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center fixed top-0 w-screen">
            <h1 className="text-xl font-bold">Hooks Practice</h1>

            <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${isOnline ? 'text-green-500 font-bold' : 'text-red-500 font-bold'
                    }`}>
                    {isOnline ? 'Online' : 'Offline'}
                </span>

                <span className="text-slate-500 font-semibold">
                    Hello, {emailFromCookie?.split('@')[0]}
                </span>

                <button
                    onClick={logout}
                    className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}