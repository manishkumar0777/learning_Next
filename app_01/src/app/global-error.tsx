'use client'
import './globals.css'

export default function GlobalError() {
    
    return (
        <html>
            <body>
                <div className="bg-white flex flex-col min-h-screen justify-center items-center border border-red-300 rounded-lg">
                    <h2 className="font-extrabold text-2xl text-black">Something went Wrong</h2>
                    <button
                        className="bg-blue-400 hover:scale-105 hover:bg-blue-600 rounded-xl text-white font-bold border border-blue-600"
                        onClick={() => window.location.reload}
                    >Refresh</button>
                </div>
            </body>
        </html>
    )
}