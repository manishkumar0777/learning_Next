import Link from "next/link"


const Method2 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-900 to-black">
      <h1 className="text-gray-200 text-9xl mb-3 font-extrabold">POST</h1>
      <div className="p-2 px-6 rounded-lg bg-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-700">
        <Link className="text-gray-300 font-semibold" href='/method2'>Go to Project</Link>
      </div>
      
    </div>
  )
}

export default Method2