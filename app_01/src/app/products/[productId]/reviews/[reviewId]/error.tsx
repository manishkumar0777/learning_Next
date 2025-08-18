'use client'

import { useRouter } from "next/navigation"
import { startTransition } from "react";


export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {

    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return (
        <div>
            <h1>Error Loading the Reviews : {error.message}</h1>
            <button
                className="bg-blue-500 rounded-xl text-black font-bold border-1 border-blue-500"
                onClick={reload}
            >
                Try again
            </button>
        </div>
    )
} 