


const Users = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-600 to-gray-300">
      <div className="rounded-lg shadow-xl max-w-6xl mx-auto p-8 space-y-8 bg-white">
        <div className="flex flex-col">
          <h1 className="text-gray-900 font-extrabold text-4xl sm:mb-0 mb-4">Profile</h1>
          <p className="text-lg mt-3 text-gray-700">Customize yourself here in a better way</p>
        </div>
        {/* layout */}
        <div className="flex flex-row h-full w-full p-8 mx-auto mb-3">
          <div className=" w-full h-full grid mx-2 my-2 grid-cols-2 gap-4"
          >
              <div className="rounded-xl w-full h-45 p-8  transform hover:scale-105 transition-all 
                          duration-200 ease-in-out shadow-lg mx-4 bg-indigo-100
                           hover:bg-indigo-200 hover:shadow-xl">
                 <h1 className="text-xl font-semibold text-indigo-800">YOU</h1>
              </div>
              <div className="rounded-xl w-full h-45 p-8  transform hover:scale-105 transition-all 
                          duration-200 ease-in-out shadow-lg mx-4 bg-blue-100
                           hover:bg-blue-200 hover:shadow-xl">
                 <h1 className="text-xl font-semibold text-blue-800">Analytics</h1>
              </div>
              <div className="rounded-xl w-full h-45 p-8  transform hover:scale-105 transition-all 
                          duration-200 ease-in-out shadow-lg mx-4 bg-gray-100
                           hover:bg-gray-200 hover:shadow-xl">
                 <h1 className="text-xl font-semibold text-gray-800">Settings</h1>
              </div>
              <div className="rounded-xl w-full h-45 p-8  transform hover:scale-105 transition-all 
                          duration-200 ease-in-out shadow-lg mx-4 bg-red-100
                           hover:bg-red-200 hover:shadow-xl">
                 <h1 className="text-xl font-semibold text-red-800">Logout!</h1>
              </div>

          </div>
          <div className="flex w-full h-full mx-2 my-2 flex-col gap-4">
              <div className="rounded-xl w-full h-45 p-8  transform hover:scale-105 transition-all 
                          duration-200 ease-in-out shadow-lg mx-4 bg-green-100
                           hover:bg-green-200 hover:shadow-xl">
                 <h1 className="text-xl font-semibold text-green-800">Completed</h1>
              </div>
              <div className="rounded-xl w-full h-45 mt-2 p-8 transform hover:scale-105 transition-all 
                          duration-200 ease-in-out shadow-lg mx-4 bg-purple-100
                           hover:bg-purple-200 hover:shadow-xl">
                 <h1 className="text-xl font-semibold text-purple-800">Deleted</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users