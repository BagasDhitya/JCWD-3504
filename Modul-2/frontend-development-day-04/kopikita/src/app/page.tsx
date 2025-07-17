import Link from "next/link"
import { Button } from '@mui/material'

export default function LandingPage() {
  return (
    <main className="w-full flex items-center justify-center min-h-screen text-center px-4">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          className="rounded-md"
          src="https://i.pinimg.com/736x/35/cd/21/35cd218bab9b3cd07468de889149397d.jpg"
          alt="KopiKita" />
      </div>
      <div className="w-full h-screen justify-center items-center flex flex-col">
        <h1 className="text-5xl text-yellow-900 mb-6">KopiKita</h1>
        <p className="text-lg text-yellow-800 max-w-xl mb-8">
          Savor the finest blends of Indonesian coffe - made with passion, served with heart.
        </p>
        <Link href='/menu'>
          <Button
            variant="outlined"
            style={{ backgroundColor: '#d4a373', color: '#432818' }}
          >
            View Our Menu
          </Button>
        </Link>
      </div>
    </main>
  )
}
