'use client'
import Link from "next/link";
import { useRouter } from "next/navigation"

const Random = () => {

    const router = useRouter();

    const navigate = (page : string) => {
        router.push(`${page}`)
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-8xl tex-gray-700 font-extrabold">random page</h1>
        <div className="flex flex-row justify-between items-center py-2 px-6">
            <Link className="mx-8" href='/about'>About</Link>
            <button className="bg-blue-400 hover:bg-blue-500 py-2 px-6" onClick={() => navigate('colors')}>Colors Page</button>
        </div>
    </div>
  )
}

export default Random