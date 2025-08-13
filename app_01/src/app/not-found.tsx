export default function NotFound(){
    return (
        <div className="flex items-center justify-center">
            <div className='items-center justify-center flex rounded-3xl flex-col w-100 h-100 border-1 border-red-700'>
                <h1 className="text-5xl text-red-400 font-extrabold">404</h1>
                <p className="text-red-200">Page Not Found</p>
            </div>
        </div>
    )
}