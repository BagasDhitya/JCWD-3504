'use client'
import { getSubscription, setSubscription } from "@/helpers/subscription.config"

export default function Subscription() {

    const subsSession = !sessionStorage.getItem('subscription')
    const subsLocal = !localStorage.getItem('subscription')
    const subsCookie = getSubscription()

    function chooseSubscription(type: 'standard' | 'premium') {
        if (type === 'standard') {
            setSubscription('standard', 7)
            alert(`Kamu berhasil berlangganan paket ${type}`)
        } else if (type === 'premium') {
            setSubscription('premium', 365)
            alert(`Kamu berhasil berlangganan paket ${type}`)
        }
    }

    function storeInSession(type: 'standard' | 'premium') {
        sessionStorage.setItem('subscription', type)
    }

    function storeInLocal(type: 'standard' | 'premium') {
        localStorage.setItem('subscription', type)
    }

    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen'>
            <div className="my-10 bg-slate-300 flex flex-col p-3 justify-center items-center gap-5">
                <p>Cara Penyimpanan yang lainnya :</p>
                <button
                    onClick={() => storeInSession('standard')}
                    className="bg-slate-500 hover:bg-slate-600 rounded-md p-3 text-white">Session Storage</button>
                <button
                    onClick={() => storeInLocal('standard')}
                    className="bg-slate-500 hover:bg-slate-600 rounded-md p-3 text-white">Local Storage</button>
            </div>
            <div className="my-10 bg-slate-300 flex flex-col p-3 justify-center items-center gap-5">
                <p>Value dari penyimpanan :</p>
                <p className="text-slate-500">Session value : {subsSession ? subsSession : 'Session sudah selesai/belum ada'}</p>
                <p className="text-slate-500">Local value : {subsLocal ? subsLocal : 'Local telah dihapus/belum ada'} </p>
                <p className="text-slate-500">Cookie value : {subsCookie ? subsCookie : 'Cookie telah hangus/belum ada'} </p>
            </div>
            <div className="border border-slate-500 rounded-md bg-slate-100 p-10">
                <div className="flex justify-center items-center text-slate-700 space-x-10">
                    <div className="w-full">
                        Standard
                        <ul className="mt-10 font-medium list-disc" >
                            <li>Masa berlaku hingga 1 minggu (setelahnya subscribe ulang)</li>
                            <li>Tidak dapat mengakses halaman tertentu</li>
                        </ul>
                        <button
                            onClick={() => chooseSubscription('standard')}
                            className="bg-slate-500 hover:bg-slate-600 rounded-md p-3 text-white">Default Package</button>
                    </div>
                    <div className="w-full">
                        Premium
                        <ul className="mt-10 font-medium list-disc">
                            <li>Masa berlaku hingga 1 tahun (setelahnya subscribe ulang)</li>
                            <li>Dapat mengakses halaman tertentu</li>
                        </ul>
                        <button
                            onClick={() => chooseSubscription('premium')}
                            className="bg-green-500 hover:bg-green-600 rounded-md p-3 text-white font-bold">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
