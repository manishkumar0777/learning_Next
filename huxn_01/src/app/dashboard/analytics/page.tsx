

const Analytics = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-600 to-gray-300">
      <div className="rounded-lg shadow-xl max-w-6xl mx-auto p-8 space-y-8 bg-white">
        <div className="flex flex-col">
          <h1 className="text-gray-900 font-extrabold text-4xl sm:mb-0 mb-4">Analytics</h1>
          <p className="text-lg mt-3 text-gray-700">Watch your analytics.</p>
        </div>
        {/* layout */}
        <div className="flex flex-row h-full w-full p-8 mx-auto mb-3">
          <div className="rounded-xl p-8 w-full h-100 my-4 transform hover:scale-105 transition-all 
                          duration-200 ease-in-out shadow-lg mx-4 bg-amber-100
                           hover:bg-amber-200 hover:shadow-xl"
          >
              <h1 className="text-xl font-semibold text-amber-800">Task Progress</h1>
          </div>
          <div className="flex w-full my-4 h-full flex-col">
              <div className="rounded-xl w-full h-45 p-8  transform hover:scale-105 transition-all 
                          duration-200 ease-in-out shadow-lg mx-4 bg-green-100
                           hover:bg-green-200 hover:shadow-xl">
                 <h1 className="text-xl font-semibold text-green-800">Completed</h1>
              </div>
              <div className="rounded-xl w-full h-45 my-10 p-8 transform hover:scale-105 transition-all 
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

export default Analytics