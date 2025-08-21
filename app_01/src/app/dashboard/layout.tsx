import '../globals.css'

export default function DashboardLayout(
    {
        children,
        users,
        revenue,
        notification,
    }: {
        children: React.ReactNode
        users: React.ReactNode
        revenue: React.ReactNode,
        notification: React.ReactNode,

    }) {
    return (
        <div className=' w-full  h-screen'>
            {children}
            <div className="flex h-screen"> {/* full page height */}
                {/* Left Section */}
                <div className="flex flex-col w-1/2">
                    <div className="flex-1 bg-red-300">{users}</div>
                    <div className="flex-1 bg-red-500">{revenue}</div>
                </div>

                {/* Right Section */}
                <div className="w-1/2 bg-blue-400">{notification}</div>
            </div>


        </div>
    )
}