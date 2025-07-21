import Link from "next/link"

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h2>JCWD3504 - Hooks Practice</h2>
      <div className='grid grid-cols-3 mt-10 gap-5'>
        <Link href='/hooks/use-state-example'>
          <button className="p-5 bg-blue-500 text-white font-semibold rounded-md">useState Example</button>
        </Link>
        <Link href='/hooks/use-effect-example'>
          <button className="p-5 bg-blue-500 text-white font-semibold rounded-md">useEffect Example</button>
        </Link>
        <Link href='/hooks/use-ref-example'>
          <button className="p-5 bg-blue-500 text-white font-semibold rounded-md">useRef Example</button>
        </Link>
        <Link href='/hooks/use-memo-example'>
          <button className="p-5 bg-blue-500 text-white font-semibold rounded-md">useMemo Example</button>
        </Link>
      </div>
    </div>
  )
}
