import { log } from "console";


const CatchAllRoutes = async ({params} : {params : {slug : string[]}}) => {
    const {slug} = await params;
    log(slug)
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <h1 className="text-gray-200 text-9xl mb-3 font-extrabold">CATCH ALL ROUTES</h1>
      {slug.map((item) => (
        <span key={item} className="text-gray-400 text-lg font-bold mt-3">{item}</span>
      ))}
    </div>
  )
}

export default CatchAllRoutes