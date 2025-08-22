import { games } from "@/data/games"
import { FaCalendar, FaDesktop, FaGamepad, FaStar } from "react-icons/fa"

const MainGamePage = async ({params} : {params : {slug : string[]}}) => {
  const {slug} = await params;

  const [category, gameSlug] = slug;

  const game = games.find(game => game.category === category && game.slug === gameSlug );

  if(!game) {
    return (
      <div className="flex justify-center items-center p-8">
        <h1 className="text-4xl font-extrabold text-gray-300">Game Not Found</h1>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Image Banner */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={game.image}
          alt={game.title}
        />
        <div className="absolute bg-black/40 inset-0 flex items-center justify-center">
          <h1 className="text-8xl text-gray-200 font-extrabold text-center">{game.title}</h1>
        </div>
      </div>
      {/* game description */}
      <div className="mt-8 space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed">{game.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaStar className="text-yellow-400 mr-2" />
            <span>Rating: {game.rating}/10</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaCalendar className="text-purple-400 mr-2" />
            <span>ReleaseDate: {game.releaseDate}</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaGamepad className="text-blue-400 mr-2" />
            <span>Developer: {game.developer}</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaDesktop className="text-indigo-400 mr-2" />
            <span>Platforms: {game.platforms.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainGamePage