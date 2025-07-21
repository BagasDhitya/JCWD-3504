'use client'

import { getSubscription } from "@/helpers/subscription.config"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Personal() {

    const router = useRouter()

    useEffect(() => {
        if (getSubscription() === 'standard') {
            alert('Kamu belum membeli paket premium, silahkan ke halaman subscription untuk upgrade paket')
            router.push('/subscription')
        } else {
            return
        }
    }, [])


    return (
        <>
            <nav className='flex justify-between p-5'>
                <div>
                    Logo Website
                </div>
                <div className='flex space-x-5'>
                    <button>button 1</button>
                    <button>button 2</button>
                    <button>button 3</button>
                </div>
            </nav>
            {/* Container utama - untuk membungkus */}
            <div className={`flex flex-col justify-center items-center w-screen h-full`}>
                {/* Layout untuk konten image dan biodata */}
                <div className='flex flex-col bg-slate-500 w-screen h-full'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1'>
                        <div className='w-full bg-red-500 text-white'>
                            Personal Image
                            {/* Personal Image - taruh personal image disini */}
                        </div>
                        <div className='w-full bg-blue-500 text-white'>
                            Personal Biodata
                            {/* Personal Biodata - taruh personal biodata disini */}
                        </div>
                    </div>
                </div>

                {/* Layout untuk konten experience */}
                <div className='flex flex-col bg-gray-100 w-screen h-full'>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                    </div>
                </div>

                {/* Layout untuk konten berisi portofolio */}
                <div className='flex flex-col bg-amber-100 w-screen h-full justify-center items-center'>
                    <p>Lorem ipsum blablablabla</p>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                        <div className='w-full bg-yellow-500 text-black'>
                            Experience
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
