// on purpose created file to throw an error
'use client'

import './globals.css'
import React, { useState } from 'react';

// making and error simulator component

const ErrorSimulator = ({ message = "this is an error", }: { message?: string }) => {
    const [error, setError] = useState(false);
    if (error) {
        throw new Error(message);
    }

    return (
        <div>
            <button
                onClick={() => setError(prev => !prev)}
                title='simulate an error'
                className='bg-red-950 hover:bg-red-800 hover:scale-105 transiton-all text-white font-extrabold'
            >
                simulate Error
            </button>
        </div>
    )

}

export default function ErrorWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-white mt-8 border border-gray-900 h-100 w-100 justify-center items-center flex flex-col rounded-lg'>
            <div className='flex flex-col items-center justify-center'>
                <ErrorSimulator message='This is an error simulated by developer' />
            </div>
            {children}
        </div>
    )
}