import Link from "next/link"


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br
                   from-gray-500 to-gray-800
                   flex p-6 items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-9xl font-extrabold transform transition-all ease-in-out duration-200 hover:scale-105 mb-2 text-gray-200">WELCOME</h1>
        <h1 className="text-5xl font-bold text-gray-100 mb-6">Welcome to the Dashboard app</h1>
        <p className="text-lg text-gray-200 mb-6">
          Manage you tasks , trace analytics , stay organised with our powerful dashBoard
        </p>
        <Link 
         className=" inline-flex text-xl text-white font-bold
         bg-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-700 px-8 py-3
         rounded-lg transition-colors" 
         href='/dashboard'
         >
          Go to Dashboard
        </Link>


      </div>
    </div>
  )
}

export default Home
