import Link from "next/link"
import { games } from "@/data/games"

const GamePage = () => {
  return (
    <div className="container mx-auto p-6">
        <h1 className="text-3xl  text-gray-300 mb-8 text-center font-bold">Explore games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
                <Link
                className="relative group shadow-lg bg-gray-900 p-5
                            transform transition-all ease-in-out rounded-xl
                            duration-200 hover:scale-105 hover:shadow-xl" 
                key={game.id}
                href={`/project2/games/${game.category}/${game.slug}`}
                >
                    <div className="relative">
                        <img 
                         className="w-full h-52 rounded-xl group-hover:opacity-80 object-cover transition" 
                         src={game.image} 
                         alt={game.title}
                        />
                        <div className="absolute bg-black inset-0 bg-opacity-30 rounded-lg 
                                        group-hover:opacity-100 opacity-0 transition"
                        ></div>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mt-4">{game.title}</h2>
                    <p className="text-sm text-gray-400 mt-2">{game.description}</p>
                    <p className="text-yellow-400 font-medium mt-3">⭐ {game.rating}/10</p>
                </Link>
            ) 
            )}
        </div>
    </div>
  )
}

export default GamePage