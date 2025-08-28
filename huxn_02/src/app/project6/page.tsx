import Link from "next/link"


const Project6 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <h1 className="text-gray-200 text-9xl mb-3 font-extrabold">PROJECT 6</h1>
      <div className="p-2 px-6 rounded-lg bg-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-700">
        <Link href='/project6/checkui'>Go to Project</Link>
      </div>
      
    </div>
  )
}

export default Project6