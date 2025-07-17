import Link from "next/link"
import { Button } from '@mui/material'

export default function Navbar() {
    return (
        <nav className="bg-yellow-800 w-screen fixed top-0 border-b border-yellow-900 shadow-sm px-6 py-4 flex items-center justify-between">
            <Link
                href="/"
                className="text-2xl text-white"
            >
                KopiKita
            </Link>
            <div className="space-x-4">
                <Link href="/menu">
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#d4a373',
                            color: '#432818'
                        }}
                    >Menu
                    </Button>
                </Link>
            </div>
        </nav>
    )
}
