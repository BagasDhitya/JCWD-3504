'use client'
import data from '@/data/users.json'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/utils/authStore'
import { setProfile } from '@/helpers/profile.config'

export default function Login() {

    const router = useRouter()
    const setAuth = useAuthStore((state) => state.setAuth)

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault() // untuk mencegah browser refresh sendiri

        const found = data.find((user) => user.email === email && user.password === password)

        if (found) {
            setAuth(email, password)
            setProfile(email) // fungsi handle profile credentials
            alert(`Berhasil masuk, selamat datang ${email?.split('@')[0]}`)
            router.push('/')
        } else {
            setError('Invalid credentials!')
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow w-80 space-y-4'>
                <h2 className='text-xl font-bold'>Sign In</h2>
                {
                    error && <p className='text-red-500 text-sm'>{error}</p>
                }
                <input
                    type="email"
                    className='border px-2 py-1 w-full'
                    placeholder='Email'
                    value={email}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                />
                <input
                    type="password"
                    className='border px-2 py-1 w-full'
                    placeholder='Password'
                    value={password}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
                />
                <button
                    type='submit'
                    className='bg-blue-600 text-white px-4 py-2 rounded w-full'
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}
