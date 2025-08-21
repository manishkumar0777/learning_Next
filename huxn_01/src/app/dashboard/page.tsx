import Link from "next/link"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 to-gray-100 p-8">
        <div className="max-w-6xl space-y-8 p-8 mx-auto bg-white shadow-lg rounded-xl ">
            <div className="flex flex-col">
                <h1 className="text-gray-900 font-extrabold text-4xl sm:mb-0 mb-4 ">
                    DashBoard
                </h1>
                <p className="text-gray-700 text-lg mt-3">Welcome , Here you will Manage all your dashboards</p>
            </div>
            {/* DashBoard grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* tasks card */}
                <Link 
                  className="bg-blue-100 hover:bg-blue-200 shadow-md hover:shadow-xl 
                             transition-all duration-200 ease-in-out transform hover:scale-105 
                             rounded p-6 "
                  href="/dashboard/tasks"
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-blue-800">
                            Tasks
                        </h1>
                        <span className="text-blue-500 text-2xl">
                            📑
                        </span>
                    </div>
                    <p className="text-gray-700 mt-3">
                        This is all your task oragnised here.
                    </p>
                </Link>

                {/* notification cards */}
                <Link 
                  className="bg-green-100 hover:bg-green-200 shadow-md hover:shadow-xl 
                             transition-all duration-200 ease-in-out transform hover:scale-105 
                             rounded p-6 "
                  href="/dashboard/notifications"
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-green-800">
                            Notifications
                        </h1>
                        <span className="text-green-500 text-2xl">
                            🔔
                        </span>
                    </div>
                    <p className="text-gray-700 mt-3">
                        All your Notificaiton appears here.
                    </p>
                </Link>

                {/* setting card */}
                <Link 
                  className="bg-gray-100 hover:bg-gray-200 shadow-md hover:shadow-xl 
                             transition-all duration-200 ease-in-out transform hover:scale-105 
                             rounded p-6 "
                  href="/dashboard/settings"
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-gray-800">
                            Settings
                        </h1>
                        <span className="text-gray-500 text-2xl">
                            ⚙️
                        </span>
                    </div>
                    <p className="text-gray-700 mt-3">
                        Whatever setting you want to do you can do it here
                    </p>
                </Link>

                {/* analytics card */}
                <Link 
                  className="bg-yellow-100 hover:bg-yellow-200 shadow-md hover:shadow-xl 
                             transition-all duration-200 ease-in-out transform hover:scale-105 
                             rounded p-6 "
                  href="/dashboard/analytics"
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-yellow-800">
                            Analytics
                        </h1>
                        <span className="text-yellow-500 text-2xl">
                            📊
                        </span>
                    </div>
                    <p className="text-gray-700 mt-3">
                        Here you can see all your analytics.
                    </p>
                </Link>

                {/* users card */}
                <Link 
                  className="bg-purple-100 hover:bg-purple-200 shadow-md hover:shadow-xl 
                             transition-all duration-200 ease-in-out transform hover:scale-105 
                             rounded p-6 "
                  href="/dashboard/users"
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-purple-800">
                            Users
                        </h1>
                        <span className="text-purple-500 text-2xl">
                            👥
                        </span>
                    </div>
                    <p className="text-gray-700 mt-3">
                        This is list and connection of all the users
                    </p>
                </Link>
            </div>


        </div>
    </div>
  )
}

export default Dashboard