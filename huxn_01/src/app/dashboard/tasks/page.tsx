
//tasks
const tasksItem = [
  {
    name: "Task1"
  },
  {
    name: "Task2"
  },
  {
    name: "Task3"
  },
  {
    name: "Task4"
  },
  {
    name: "Task5"
  },
  {
    name: "Task6"
  },
  {
    name: "Task7"
  },
]

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-400 p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-6xl mx-auto p-8 space-y-8">
        <div className="flex flex-col">
          <h1 className="text-gray-900 font-extrabold text-4xl sm:mb-0 mb-4">Tasks</h1>
          <p className="text-lg text-gray-700 mt-3">All your tasks.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasksItem.map((item) => {
            return (
              <div 
                className="bg-blue-100 hover:bg-blue-200 shadow-md hover:shadow-xl 
                             transition-all duration-200 ease-in-out transform hover:scale-105 
                             rounded p-6 "
                key={item.name}
              >
            <h1>{item.name}</h1>
          </div>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Tasks